import {
  getAccessToken,
  getCurrentTrack,
  getLastPlayedTrack,
} from "@/lib/spotify"
import { Artist, CurrentlyPlaying } from "@/types/currently-playing"
import {
  RecentlyPlayed,
  Artist as ArtistRecenly,
} from "@/types/recently-played"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  console.log("[Spotify API] Memulai permintaan data...") // Log 1: Memulai proses
  
  try {
    console.log("[Spotify API] Mendapatkan access token...")
    const accessToken = await getAccessToken()
    console.log("[Spotify API] Access token:", accessToken ? "Berhasil" : "Gagal") // Log 2: Status token
    
    if (!accessToken) {
      console.error("[Spotify API] Error: Tidak dapat mendapatkan access token")
      return NextResponse.json(
        { error: "Error fetching access_token from Spotify" },
        { status: 500 }
      )
    }

    console.log("[Spotify API] Mendapatkan track yang sedang diputar...")
    const track = (await getCurrentTrack(accessToken)) as CurrentlyPlaying | null
    console.log("[Spotify API] Response track saat ini:", JSON.stringify(track, null, 2)) // Log 3: Raw track response

    console.log("[Spotify API] Mendapatkan track terakhir yang diputar...")
    const lastTrack = (await getLastPlayedTrack(accessToken)) as RecentlyPlayed | null
    console.log("[Spotify API] Response track terakhir:", JSON.stringify(lastTrack, null, 2)) // Log 4: Raw lastTrack response

    // Handle currently playing track
    if (track?.item) {
      console.log("[Spotify API] Mengembalikan data track yang sedang diputar")
      return NextResponse.json({
        name: track.item.name,
        artists: track.item.artists?.map((artist: Artist) => ({
          name: artist.name,
          href: artist.external_urls?.spotify
        })) || [],
        href: track.item.external_urls?.spotify,
        albumArt: track.item.album?.images?.[0] || null,
        currentlyPlaying: true,
      })
    }

    // Handle last played track (with proper checks)
    if (lastTrack?.items?.length > 0) {
      console.log("[Spotify API] Track sedang tidak diputar, mengembalikan track terakhir")
      const lastTrackItem = lastTrack.items[0].track
      
      if (lastTrackItem) {
        return NextResponse.json({
          name: lastTrackItem.name,
          artists: lastTrackItem.artists?.map((artist: ArtistRecenly) => ({
            name: artist.name,
            href: artist.external_urls?.spotify
          })) || [],
          href: lastTrackItem.external_urls?.spotify,
          albumArt: lastTrackItem.album?.images?.[0] || null,
          currentlyPlaying: false,
        })
      }
    }

    console.log("[Spotify API] Tidak ada data track yang tersedia")
    return NextResponse.json(
      { error: "No currently playing or recent track data available" },
      { status: 404 }
    )

  } catch (error) {
    console.error("[Spotify API] Error:", error)
    return NextResponse.json(
      { error: "Internal server error while fetching Spotify data" },
      { status: 500 }
    )
  }
}
"use client";

import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <Uploady
          destination={{ url: "https://my-server.com/upload" }}
          noPortal={true} // fixes the issue
        >
          <div>
            <UploadButton />
          </div>
        </Uploady>
      </div>

    </main>
  )
}

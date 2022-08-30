import Uppy from "@uppy/core";
import { Dashboard, useUppy } from "@uppy/react";
import Link from "next/link";

export default function UploaderPage() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Uploader />
    </div>
  );
}

function Uploader() {
  const uppy = useUppy(
    () =>
      new Uppy({
        autoProceed: true,
        restrictions: {
          // Max file size is 3 MB
          maxFileSize: 3000000,
          maxNumberOfFiles: 1,
          // Only image files
          allowedFileTypes: ["image/*"],
        },
      })
  );
  return <Dashboard uppy={uppy} />;
}

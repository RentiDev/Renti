import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  let cloudinary: string;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

interface Result {
  info: {
    secure_url: string;
    // Other properties of the info object if any
  };
  // Other properties of the result object if any
}

const ImageUploader: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback((result: Result) => {
    if (result.info) {
      onChange(result.info.secure_url);
    }
  }, [onChange]);

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="ete3nt9q"
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => (
        <div
          onClick={open as (() => void) | undefined}
          className="
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed
            border-2
            p-10
            border-gray-500
            flex
            flex-col
            justify-center
            items-center
            w-full
            h-[70vh]
            gap-8
            text-slate-700"
        >
          <TbPhotoPlus size={100} />
          <div className="text-xl font-lufgaMedium">Click to upload</div>
          {value && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                alt="Uploaded image"
                fill
                style={{ objectFit: "cover" }}
                src={value}
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUploader;
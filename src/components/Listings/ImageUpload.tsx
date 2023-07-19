import Heading from "../Heading";
import ImageUploader from "./ImageUploader";
import {type FieldValues, useForm} from "react-hook-form";

interface ImageUploadProps {
    onImageUpload: (value: string) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
    const { 
        setValue,
        watch,
        formState: {
        },
      } = useForm<FieldValues>({
        defaultValues: {
          category: '',
          location: null,
          guestCount: 1,
          roomCount: 1,
          bathroomCount: 1,
          imageSrc: '',
          price: 1,
          title: '',
          description: '',
        }
      });
    
    const setCustomValue = (id: string, value: string) => {
      if (id === 'imageSrc') {
        onImageUpload(value);
      }
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
    })
    }
    
    const imageSrc: string = watch('imageSrc') as string;

    return (
        <div className="flex flex-col gap-4">
            <Heading
                title="Upload Images"
                subtitle="Upload images of your property!"
            />
        <ImageUploader
          onChange={(value) => setCustomValue('imageSrc', value)}
          value={imageSrc}
        />
        </div>
    );
}

export default ImageUpload;
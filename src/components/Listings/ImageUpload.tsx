import Heading from "../Heading";
import ImageUploader from "./ImageUploader";
import {FieldValues, useForm} from "react-hook-form";

const ImageUpload = () => {
    const { 
        setValue,
        watch,
        formState: {
          errors,
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
    
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
    })
    }
    
    const imageSrc = watch('imageSrc');

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
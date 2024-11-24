export const uploadImageToCloudinary = async (file: File, cloudName: string) => {

  const preset = import.meta.env.VITE_CLOUDINARY_PRESET

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", preset); // Nombre del preset configurado en Cloudinary

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  return data.secure_url; // URL pública de la imagen subida
};

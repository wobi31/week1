const product = {
  name: 'kemeja pria tangan',
  rating: 5,
  price: 135000,
  isActive: true,
  Images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jgp"],
  variants: {
      nama: "formal",
      Option: ['Putih', 'grey', 'black'],
      },
    storeName: 'Toko-kemeja',
}
  console.log(product)
  console.log(product.variants.Option[0])
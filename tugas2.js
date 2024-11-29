const totalbelanja = 1000000;
if(totalbelanja >= 1000000){
  console.log('anda mendapatkan diskon 10%')
} else if(totalbelanja >= 5000000 < 1000000){
  console.log(`anda mendapatkan diskon 5% total belanja anda menjadi ${totalbelanja * 5 / 100}`)
} else if(totalbelanja <= 50000){
  console.log(`anda tidak mendapatkan diskon'`)
}
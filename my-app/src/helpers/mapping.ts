export const mappingBuildings = (data: any) => {

  let map = data.map((e: any) => {
    return {
      nama: e.building_name,
      alamat: e.address,
      slug: e.slug,
      thumbnail: e.thumbnail,
      images: e.images,
      fasilitas: e.facilities,
      type: e.type,
      kategori: e.category,
      harga: e.price
    }
  })
  return map
}

export const mappingDetail = (data: any) => {
  return {
    nama: data.building_name,
    slug: data.slug,
    status: data.status,
    description: data.description,
    alamat: data.address,
    thumbnail: data.thumbnail,
    fasilitas: data.facilities,
    spesifikasi: data.specification,
    peraturan: data.rules,
    images: data.images,
    type: data.type,
    kategori: data.category,
    kontak: data.provider_telp,
    harga: data.price
  }
}

export const mappingBookings = (data: any) => {

  return data.map((e: any) => {
    return {
      nama: e.building_name,
      slug: e.slug,
      alamat: e.address,
      thumbnail: e.thumbnail,
      fasilitas: e.facilities,
      status: e.status,
      images: e.images,
      type: e.type,
      kategori: e.category,
      statusPengajuan: e.bookings[0],
      harga: e.price,
      kontak: e.provider_telp ?? e.user_telp,
    }
  })
}

export const mappingDetailBook = (data: any) => {
  return {
    nama: data.building_name,
    slug: data.slug,
    status: data.status,
    description: data.description,
    alamat: data.address,
    thumbnail: data.thumbnail,
    fasilitas: data.facilities,
    spesifikasi: data.specification,
    peraturan: data.rules,
    images: data.images,
    type: data.type,
    kategori: data.category,
    kontak: data.provider_telp ?? data.user_telp,
    statusPengajuan: data.bookings[0],
    harga: data.price,
  }
}

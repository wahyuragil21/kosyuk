export const mappingBuildings = (data)=>{
  
  let map = data.map(e => {return {
    nama : e.building_name,
    alamat : e.address,
    slug : e.slug,
    thumbnail : e.thumbnail,
    images : e.images,
    fasilitas : e.facilities,
    type : e.category,
    harga : e.price
  }})
  return map
}

export const mappingDetail = (data)=>{
  return {
    nama : data.building_name,
    slug : data.slug,
    status : data.status,
    description : data.description,
    alamat : data.address,
    thumbnail : data.thumbnail,
    fasilitas : data.facilities,
    spesifikasi : data.specification,
    peraturan : data.rules,
    images : data.images,
    type : data.type,
    kontak : data.provider_telp,
    harga : data.price
  }
}

export const mappingBookings = (data)=>{
  
  return data.map(e=>{
    return {
      nama: e.building_name,
      slug: e.slug,
      alamat: e.address,
      thumbnail: e.thumbnail,
      fasilitas: e.facilities,
      status: e.status,
      images: e.images,
      type: e.type,
      statusPengajuan: e.bookings[0],
      harga: e.price,
      kontak : e.provider_telp ?? e.user_telp,
    }
  }) 
}

export const mappingDetailBook = (data)=>{
    return {
      nama : data.building_name,
      slug : data.slug,
      status : data.status,
      description : data.description,
      alamat : data.address,
      thumbnail : data.thumbnail,
      fasilitas : data.facilities,
      spesifikasi : data.specification,
      peraturan : data.rules,
      images : data.images,
      type : data.type,
      kontak : data.provider_telp ?? data.user_telp,
      statusPengajuan : data.bookings[0],
      harga : data.price,
    }
}

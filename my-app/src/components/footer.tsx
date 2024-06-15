export default function Footer() {
    return (
        <footer>
        <div className="container mx-auto p-4 pt-6 md:p-6">
          <div className="flex flex-wrap justify-center mb-4">
            <div className="w-full md:w-1/4 xl:w-1/4 p-6">
              <h3 className="text-lg font-bold mb-2 text-black">Kosyuk</h3>
              <ul>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Tentang Kami</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Job Kosyuk</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Promosikan Kost Anda</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pusat Bantuan</a></li>
              </ul>
            </div>
  
            <div className="w-full md:w-1/4 xl:w-1/4 p-6">
              <h3 className="text-lg font-bold mb-2 text-black">Blog Kosyuk</h3>
              <ul>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Singgahsini</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sewa Kos untuk Perusahaan</a></li>
              </ul>
            </div>
  
            <div className="w-full md:w-1/4 xl:w-1/4 p-6">
              <h3 className="text-lg font-bold mb-2 text-black">KEBIJAKAN</h3>
              <ul>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Kebijakan Privasi</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Syarat dan Ketentuan Umum</a></li>
              </ul>
            </div>
  
            <div className="w-full md:w-1/4 xl:w-1/4 p-6">
              <h3 className="text-lg font-bold mb-2 text-black">HUBUNGI KAMI</h3>
              <ul>
                <li><a href="mailto:cs@Kosyuk.com" className="text-gray-600 hover:text-gray-900"><i className="fas fa-envelope"></i> cs@kosyuk.com</a></li>
                <li><a href="tel:+6281325111171" className="text-gray-600 hover:text-gray-900"><i className="fas fa-phone-alt"></i> +6281325111171</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}
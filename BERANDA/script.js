var tanya = true;
while( tanya ) {

		//menangkap pilihan komputer
		//membangkitkan bilangan random
		var com = Math.floor(Math.random() * 10 ) + 1;

		console.log(com);

	var kesempatan = 3;
	while( kesempatan != 0) {

		// menangkap pilihan player
		var p = prompt('pilih angka 1-10');

		var hasil = '';
		// menentukan rules
		if( p == com ) {
			hasil = 'BENAR';
			kesempatan = 0
		} else if ( p < com) {
			hasil = 'terlalu rendah'
			kesempatan = kesempatan - 1;
		} else {
			hasil = 'terlalu tinggi'
			kesempatan = kesempatan - 1;
		}

		//tampilkan hasilnya
		alert('pilihan kamu ' + hasil + '\nkesempatan: ' + kesempatan);

	}

tanya = confirm('main lagi?')

}

alert('terima kasih sudah bermain')
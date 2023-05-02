export default interface User{
    ime: string,
    prezime: string,
    jmbg: string,
    adresa: string,
    brojTelefona: string,
    email: string,
    opstina: {
        PTT: number,
        Naziv: string
    }
}
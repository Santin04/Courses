
public class Animais {

	public static void main(String[] args) {
		
		Pets meuCachorro = new Cachorro("Bob");
		Pets meuGato = new Gato("Garfield");
		
		meuCachorro.emitirSom();
		meuGato.emitirSom();
		
		System.out.println("Nome do cachorro: " + meuCachorro.getNome());
		System.out.println("Nome do gato: " + meuGato.getNome());

	}

}

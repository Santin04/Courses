
public class Animais {

	public static void main(String[] args) {
		
		Pets meuCachorro = new Cachorro("Bob");
		Pets meuGato = new Gato("Garfield");
		
		meuCachorro.emitirSom();
		meuGato.emitirSom();
		
		System.out.println("---------------------------");
		
		System.out.println("Nome do cachorro: " + meuCachorro.getNome());
		System.out.println("Nome do gato: " + meuGato.getNome());
		
		System.out.println("---------------------------");
		
		meuCachorro.dormir();
		meuCachorro.acordar();
		meuGato.dormir();
		meuGato.acordar();

	}

}

//comentários explicativos no arquivo Cachorro.java, aqui não pois são a mesma coisa
public class Gato extends Pets {
	
	public Gato(String nome) {
		super(nome);
	}
	
	@Override
	public void emitirSom() {
		System.out.println("Miado");
	}
}

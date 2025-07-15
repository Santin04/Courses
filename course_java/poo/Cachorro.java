
//Já no inicio da declaração da classe, acrescentamos extens name_class
//para assim já informar para o java que Cachorro herda de Pets
public class Cachorro extends Pets {
	
	//faz com que herde atributos da classe de cima, assim sempre que usar
	//o get e set da classe de cima já vai atualizar
	public Cachorro(String nome) {
		super(nome);
	}
	
	//mudando a varaivel emitir som e colocando uma string "Latido" nela
	@Override
	public void emitirSom() {
		System.out.println("Latido");
	}
}
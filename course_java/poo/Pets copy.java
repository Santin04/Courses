
//adicionar o abstract e implements nameArquivo para poder usar os metodos do arquivo (abstração)
public abstract class Pets implements sonoPet {
	//fazendo com que não seja permitido chamar a variavel a não aqui dentro dessa classe
	private String nome;
	
	//como todo animal tem nome então vamos definir a variavel aqui mesmo no construtor
	//qeu assim que chamar a classe já vai ter que definir o nome do animal
	public Pets(String name) {
		this.nome = name;
	}
	
	public String getNome() {
		return this.nome;
	}
	
	public void setNome(String name) {
		this.nome = name;
	}
	
	//como todo animal emite som vamos deixar esse metodo aqui
	public void emitirSom() {
		System.out.println("Som do animal");
	}
	
	@Override
	public void dormir() {
		System.out.println(this.nome + " está dormindo");
	}
	
	@Override
	public void acordar() {
		System.out.println(this.nome + "acordou");
	}
}

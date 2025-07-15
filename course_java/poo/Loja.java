
public class Loja {

	public static void main(String[] args) {
		Produto carrinho = new Produto();
		Produto barbie = new Produto();
		
		carrinho.setDescription("Carrinho de controle remoto");
		System.out.println(carrinho.getDescription());

		barbie.setDescription("Boneca Barbie");
		System.out.println(barbie.getDescription());
	}

}

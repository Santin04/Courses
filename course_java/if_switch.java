
public class if_witch {

	public static void main(String[] args) {
		
		//estrutura if, else if e else
		int valor = 8;
		
		if (valor == 8) {
			System.out.println("O valor é 8");
		} else if (valor == 9) {
			System.out.println("O valor é 9");
		} else {
			System.out.println("Valor não é 9 nem 8");
		}

		
		//estrutura switch
		int numero = 3;
		
		switch (numero) {
			case 1: 
				System.out.println("Número = 1");
				break;
			case 2:
				System.out.println("Número = 2");
				break;
			case 3:
				System.out.println("Número = 3");
				break;
			default:
				System.out.println("Valor inválido");
				break;
		}
	}
}
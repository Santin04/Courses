
public class loops {

	public static void main(String[] args) {
		
		//estrutura while
		int numero = 0;
		
		while (numero < 5) {
			
			System.out.println(numero);
			
			numero++;
		}
		
		System.out.println("--------------------------");
		
		//estrutura do begin
		numero = 0;
		
		do {
			
			System.out.println(numero);
			
			numero++;
		} while (numero < 5);

		System.out.println("--------------------------");
		
		//estrutura for
		for(int i=0; i < 5; i++) {
			System.out.println(i);
		}
	}

}

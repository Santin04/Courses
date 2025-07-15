import java.util.Scanner;

public class text_list {

	public static void main(String[] args) {
		
		//recebendo dados do usuário (imput)
		
		//criando o metodo que consegue receber valores do usuário
		Scanner teclado = new Scanner(System.in);
		String nome;
		int idade;
		
		//fazendo com que o usuário passe um dado
		System.out.println("Digite seu nome");
		//coletando o nome do usuário
		nome = teclado.next();
		
		System.out.println("Digite sua idade");
		idade = teclado.nextInt();
	
		System.out.println("Nome: " + nome);
		System.out.println("Idade: " + idade);
		
		
		//arrays (listas)
		//criando a lista nota e passando quantas posições vai ser usada
		int[] nota = new int[3];
		
		nota[0] = 8;
		nota[1] = 9;
		nota[2] = 7;
		
		for (int i = 0; i < 3; i++) {
			System.out.println(nota[i]);
		}
		
		System.out.println("-------------------------");
		
		//matriz
		//criando uma matriz e definindo a quatidade de linha e depois de colunas
		int[][] matriz = new int[2][3];
		
		matriz[0][0] = 1;
		matriz[0][1] = 2;
		matriz[0][2] = 3;
		matriz[1][0] = 4;
		matriz[1][1] = 5;
		matriz[1][2] = 6;
		
		for (int i = 0; i < 2; i++) {
			for (int j = 0; j < 3; j++) {
				System.out.println(matriz[i][j]);
			}
		}
	}

}

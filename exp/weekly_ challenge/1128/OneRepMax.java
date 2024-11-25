import java.io.*;
/*
W는 무게 R은 반복 횟수를 의미함
1RM 계산법은 = 무게 * (1 + 30/r)
*/ 
class OneRepMax {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		String[] inputArr = input.split(" ");
		int weight = Integer.parseInt(inputArr[0]);
		int repeat = Integer.parseInt(inputArr[1]);
		System.out.println(weight * (1 + 30/repeat));
	}
  
}
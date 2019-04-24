# React-js
Contains react js code
Class.forName("oracle.jdbc.driver.OracleDriver");
	Connection cn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","scott","tiger");
	String query = "insert into wipro6 values('Manju978',289)";
	PreparedStatement ps = cn.prepareStatement(query);
	boolean x = ps.execute();
	System.out.println("Execution Done");

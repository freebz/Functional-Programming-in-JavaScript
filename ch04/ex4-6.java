// 4.3.1 Emulating function factories

public interface StudentStore {
    Student findStudent(String ssn);
}

public class DbStudentStore implements StudentStore {
    public Student findStudent(String ssn) {
	// ...
	ResultSet rs  = jdbcStmt.executeQuery(sql);
	while(rs.next()){
	    String ssn = rs.getString("ssn");
	    String name = rs.getString("firstname") +
		rs.getString("lastname");
	    return new Student(ssn, name);
	}
    }
}

public class CacheStudentStore implements StudentStore {
    public Student findStudent(String ssn) {
	// ...
	return cache.get(ssn);
    }
}



StudentStore store = getStudentStore();
store.findStudent("444-44-4444");


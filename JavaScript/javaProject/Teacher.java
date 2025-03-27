package javaProject;
import java.util.*;

class ClassA13 {
    private final HashMap<String, Float> student = new HashMap<>();

    public void insertRec(String name, float attendedClasses,int totalClasses) {
        float percentage=(attendedClasses/totalClasses)*100;
        student.put(name, percentage);
    }

    public String getRec(String name) {
        if (!student.containsKey(name)) {
            return "No record found for the student " + name;
        }
        double attendance = student.get(name);
        if (attendance < 75) {
            return "Mr. " + name + " is detained. Please attend classes regularly.";
        }
        return "Attendance percentage of the student " + name + " is " + attendance + "%";
    }

    public String delRec(String name) {
        if(student.isEmpty()){
            return "There is No Records to delete.";
        }
        if (student.containsKey(name)) {
            student.remove(name);
            return "Record of " + name + " has been deleted.";
        }
        return "No student with the name " + name;
    }

    public String updateRecAtt(String name, float attendance) {
        if (student.containsKey(name)) {
            student.put(name, attendance);
            return "Record of " + name + " has been updated.";
        }
        return "No student with the name " + name;
    }

    public int getSize() {
        return student.size();
    }

    public void deleteAllRec() {
        if(student.isEmpty()){
            System.out.println("No records to delete");
            return;
        }
        student.clear();
        System.out.println("All record delted successfully.");
    }
}

public class Teacher {
    public static void main(String[] args) {
        ClassA13 cls = new ClassA13();
        Scanner sc = new Scanner(System.in);
        boolean flag = true;

        while (flag) {
            System.out.println("\nSelect an operation to perform:");
            System.out.println("1. Insert Record  2. Get Record  3. Delete Record  4. Update Record  5. Get Size  6. Clear All Records  7.Exit");
            System.out.print("Enter above one operation to perform: ");
            int option = sc.nextInt();
            sc.nextLine();

            switch (option) {
                case 1:
                    System.out.print("Enter total classes : ");
                    int totalClasses=sc.nextInt();
                    System.out.print("Enter the number of students to insert: ");
                    int size = sc.nextInt();
                    sc.nextLine();
                    for (int i = 1; i <= size; i++) {
                        System.out.print("Enter student name: ");
                        String name = sc.nextLine();
                        System.out.print("Enter the number of classes attended by student " + name + ": ");
                        float attendance = sc.nextFloat();
                        sc.nextLine();
                        cls.insertRec(name, attendance,totalClasses);
                    }
                    break;

                case 2:
                    System.out.print("Enter student name to get record: ");
                    String name = sc.nextLine();
                    System.out.println(cls.getRec(name));
                    break;

                case 3:
                    System.out.print("Enter student name to delete record: ");
                    name = sc.nextLine();
                    System.out.println(cls.delRec(name));
                    break;

                case 4:
                    System.out.print("Enter student name to update record: ");
                    name = sc.nextLine();
                    System.out.print("Enter new attendance: ");
                    float attendance = sc.nextFloat();
                    sc.nextLine();
                    System.out.println(cls.updateRecAtt(name, attendance));
                    break;

                case 5:
                    System.out.println("Total records: " + cls.getSize());
                    break;

                case 6:
                    cls.deleteAllRec();
                    break;

                case 7:
                    flag=false;
                    System.out.println("Exiting the program.....");
                break;
                default:
                    System.out.println("Invalid choice. Please select a valid option.");
            }
            if(flag){
            System.out.println("Do you want to perform another operation press yes Otherwise press no): ");
            String response = sc.nextLine().trim().toLowerCase();
            if (response.equals("no")) {
                flag = false;
                System.out.println("Exiting the program.....");
              }
            }
        }
        sc.close();
    }
}

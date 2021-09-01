public class getCountDiary {

    @AuraEnabled
    public static Integer getCount() {
        List<Contact> accountsList = [SELECT ID FROM Contact];

        return accountsList.size();
    }

}
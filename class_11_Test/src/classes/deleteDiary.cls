/**
 * Created by appleroom on 8/25/21.
 */

public with sharing class deleteDiary {
    @AuraEnabled
    public static void deleteDiary() {
        List<Contact> accountsList = [SELECT ID FROM Contact];
        delete accountsList;
    }
}
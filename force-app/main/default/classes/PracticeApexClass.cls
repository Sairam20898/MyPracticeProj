public with sharing class PracticeApexClass {
    public PracticeApexClass() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){
        try {
            return [select id, name from Account];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

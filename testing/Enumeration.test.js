const SDOAdapter = require("../src/node/SDOAdapterNode");
const VOC_OBJ_DACH = require('../testData/dachkg_1');
const VOC_OBJ_SDO3_7 = require('../testData/schema_3.7');

async function initAdapter() {
    let mySA = new SDOAdapter();
    await mySA.addVocabularies([VOC_OBJ_SDO3_7, VOC_OBJ_DACH], null);
    return mySA;
}

describe('Enumeration methods', () => {

    test("constructor()", async () => {
        let mySA = await initAdapter();
        let DayOfWeek = mySA.getEnumeration("schema:DayOfWeek");
        expect(DayOfWeek.getTermType()).toBe("schema:Enumeration");
        let DayOfWeekFromClass = mySA.getClass("schema:DayOfWeek");
        expect(DayOfWeekFromClass.getTermType()).toBe("schema:Enumeration");
    });

    test("getTermType()", async () => {
        let mySA = await initAdapter();
        let DayOfWeek = mySA.getEnumeration("schema:DayOfWeek");
        expect(DayOfWeek.getTermType()).toBe("schema:Enumeration");
    });

    test("getSource()", async () => {
        let mySA = await initAdapter();
        let DayOfWeek = mySA.getEnumeration("schema:DayOfWeek");
        expect(DayOfWeek.getSource()).toBe("http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass");
        let MedicalEnumeration = mySA.getEnumeration("schema:MedicalEnumeration");
        expect(MedicalEnumeration.getSource()).toBe(null);
    });

    test("getVocabulary()", async () => {
        let mySA = await initAdapter();
        let DayOfWeek = mySA.getEnumeration("schema:DayOfWeek");
        expect(DayOfWeek.getVocabulary()).toBe("http://schema.org");
        let MedicalEnumeration = mySA.getEnumeration("schema:MedicalEnumeration");
        expect(MedicalEnumeration.getVocabulary()).toBe("http://health-lifesci.schema.org");
    });

    test("getIRI()", async () => {
        let mySA = await initAdapter();
        let DayOfWeek = mySA.getEnumeration("schema:DayOfWeek");
        expect(DayOfWeek.getIRI()).toBe("http://schema.org/DayOfWeek");
        expect(DayOfWeek.getIRI(true)).toBe("schema:DayOfWeek");
        expect(DayOfWeek.getIRI()).toBe(DayOfWeek.getIRI(false));
    });

    test("getName()", async () => {
        let mySA = await initAdapter();
        let DayOfWeek = mySA.getEnumeration("schema:DayOfWeek");
        expect(DayOfWeek.getName()).toBe("DayOfWeek");
        expect(DayOfWeek.getName('en')).toBe(DayOfWeek.getName());
        expect(DayOfWeek.getName('de')).toBe(null);
    });

    test("getDescription()", async () => {
        let mySA = await initAdapter();
        let MedicalEnumeration = mySA.getEnumeration("schema:MedicalEnumeration");
        expect(MedicalEnumeration.getDescription()).toBe("Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.");
        expect(MedicalEnumeration.getDescription('en')).toBe("Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.");
        expect(MedicalEnumeration.getDescription('de')).toBe(null);
    });

    test("isSupersededBy()", async () => {
        let mySA = await initAdapter();
        let MedicalEnumeration = mySA.getEnumeration("schema:MedicalEnumeration");
        expect(MedicalEnumeration.isSupersededBy()).toBe(null);
    });

    test("getEnumerationMembers()", async () => {
        let mySA = await initAdapter();
        let DayOfWeek = mySA.getEnumeration("schema:DayOfWeek");
        expect(DayOfWeek.getEnumerationMembers()).toContain("schema:Monday");
        expect(DayOfWeek.getEnumerationMembers()).toContain("schema:Friday");
        expect(DayOfWeek.getEnumerationMembers()).not.toContain("schema:Thing");
    });

    test("getProperties()", async () => {
        let mySA = await initAdapter();
        let DayOfWeek = mySA.getEnumeration("schema:DayOfWeek");
        expect(DayOfWeek.getProperties()).toContain("schema:name");
        expect(DayOfWeek.getProperties(true)).toContain("schema:name");
        expect(DayOfWeek.getProperties(false)).not.toContain("schema:name");
        expect(DayOfWeek.getProperties(true)).not.toContain("schema:accessModeSufficient");
        expect(DayOfWeek.getProperties(false)).not.toContain("schema:accessModeSufficient");
    });

    test("getSuperClasses()", async () => {
        let mySA = await initAdapter();
        let DayOfWeek = mySA.getEnumeration("schema:DayOfWeek");
        expect(DayOfWeek.getSuperClasses()).toContain("schema:Enumeration");
        expect(DayOfWeek.getSuperClasses()).toContain("schema:Intangible");
        expect(DayOfWeek.getSuperClasses()).toContain("schema:Thing");
        expect(DayOfWeek.getSuperClasses()).not.toContain("schema:Event");
        let DayOfWeekFromClass = mySA.getClass("schema:DayOfWeek");
        expect(DayOfWeekFromClass.getSuperClasses(true)).toContain("schema:Thing");
        expect(DayOfWeekFromClass.getSuperClasses(false)).not.toContain("schema:Thing");
    });

    test("getSubClasses()", async () => {
        let mySA = await initAdapter();
        let PaymentMethod = mySA.getEnumeration("schema:PaymentMethod");
        expect(PaymentMethod.getSubClasses()).toContain("schema:PaymentCard");
        expect(PaymentMethod.getSubClasses(true)).toContain("schema:PaymentCard");
        expect(PaymentMethod.getSubClasses(false)).toContain("schema:PaymentCard");
        expect(PaymentMethod.getSubClasses(true)).toContain("schema:CreditCard");
        expect(PaymentMethod.getSubClasses(false)).not.toContain("schema:CreditCard");
    });
});

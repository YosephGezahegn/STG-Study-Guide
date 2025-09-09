// External storage for questions/topics
// Define window.questionsData with optional minimal structure.
// To use: populate questionsData.questions with your objects and (optionally) topics list.
// script.js will consume this if present; otherwise it falls back to embedded data.
(function(){
    window.questionsData = window.questionsData || {
        "stg_2021_questions": [
            {
                "id": 1,
                "question": "What is the primary purpose of a prescription in healthcare?",
                "choices": [
                    "A. To provide legal documentation of medication orders",
                    "B. To serve as a communication link between prescriber, pharmacist, and patient",
                    "C. To record patient medical history",
                    "D. To track pharmaceutical inventory"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "According to the text, 'Prescription is the link between the prescriber, the pharmacist (or dispenser) and the patient.' It serves as a crucial communication tool ensuring proper medication management.",
                "tags": [
                  "Chapter 3", 
                    "prescription_purpose",
                    "communication_link"
                ]
            },
            {
                "id": 2,
                "question": "Which of the following is NOT a component of rational use of medicines?",
                "choices": [
                    "A. Safe medication administration",
                    "B. Effective treatment outcomes",
                    "C. Economic burden reduction",
                    "D. Maximizing pharmaceutical company profits"
                ],
                "correctAnswer": 3,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational use of medicines aims to provide safe, effective, and economic medication through collaborative efforts of prescribers, dispensers, patients, and policymakers. Maximizing pharmaceutical profits is not part of this definition.",
                "tags": [
                 "Chapter 1","rational_medicine_use",
                    "medicine_management"
                ]
            },
            {
                "id": 3,
                "question": "What is the recommended approach when prescribing medications during pregnancy?",
                "choices": [
                    "A. Avoid all medications unless absolutely necessary",
                    "B. Use only medications proven safe in all trimesters",
                    "C. Weigh benefit-risk ratio before prescribing any medication",
                    "D. Prescribe freely as most drugs don't cross placenta"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text states that 'Administration of medicines, except those proved safe, in the first trimester is therefore not generally recommended. It is advisable to prescribe no medicine during any stage of pregnancy if possible. This, however, should not preclude the importance of prescribing in life-threatening conditions of the mother. Prior to prescribing any medicine for pregnant women, the benefit risk ratio of the prescriber should be considered.'",
                "tags": [
                 "Chapter 1","pregnancy_prescribing",
                    "special_populations"
                ]
            },
            {
                "id": 4,
                "question": "Which statement about adverse drug reactions (ADRs) is correct?",
                "choices": [
                    "A. ADRs only occur at toxic doses of medications",
                    "B. ADRs are always predictable extensions of pharmacological effects",
                    "C. ADRs can range from mild to lethal in severity",
                    "D. ADRs are limited to prescribed medications only"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Adverse Drug Reactions (ADRs) are defined as 'a response to a medicine which is noxious and unintended, and which occurs at doses normally used for the prophylaxis, diagnosis, or therapy of disease, or for the modification of physiological functions.' They can be mild (no intervention required), moderate (switching medicine needed), severe (antidote required), or lethal.",
                "tags": [
                 "Chapter 1","adverse_drug_reactions",
                    "medication_safety"
                ]
            },
            {
                "id": 5,
                "question": "What is the primary goal of antimicrobial stewardship programs?",
                "choices": [
                    "A. To increase sales of newer antibiotics",
                    "B. To promote judicious use of antimicrobials and preserve their effectiveness",
                    "C. To reduce hospital readmission rates",
                    "D. To minimize laboratory testing costs"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Antimicrobial stewardship (AMS) is defined as 'an organizational or healthcare system-wide approach for promoting and monitoring judicious use of antimicrobials to preserve their future effectiveness.' AMS helps manage inappropriate use of antibiotics.",
                "tags": [
                 "Chapter 1","antimicrobial_stewardship",
                    "rational_antibiotic_use"
                ]
            },
            {
                "id": 6,
                "question": "Which of the following is a key component of good dispensing practice?",
                "choices": [
                    "A. Dispensing medications in the original manufacturer packaging only",
                    "B. Ensuring the correct medicine is delivered to the right patient in the required dosage",
                    "C. Providing verbal instructions only for medication use",
                    "D. Limiting dispensing to prescription-only medications"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Good Dispensing Practices ensure that 'the correct medicine is delivered to the right patient, in the required dosage and quantities, with clear information, and in package that maintains an acceptable potency and quality of the medicine.'",
                "tags": [
                 "Chapter 1","dispensing_practices",
                    "patient_safety"
                ]
            },
            {
                "id": 7,
                "question": "What is the recommended frequency for changing intravenous tubing used to administer propofol?",
                "choices": [
                    "A. Every 6 hours",
                    "B. Every 12 hours",
                    "C. Every 24 hours",
                    "D. Every 48 hours"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "According to the text, 'Replace tubing used to administer propofol infusions every 6 to 12 hours, depending on its use, per the manufacturer's direction.'",
                "tags": [
                 "Chapter 1","intravenous_tubing",
                    "medication_administration"
                ]
            },
            {
                "id": 8,
                "question": "Which population is at highest risk for adverse drug reactions due to physiological changes?",
                "choices": [
                    "A. Adolescents",
                    "B. Pregnant women",
                    "C. Elderly patients",
                    "D. Adult males"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text mentions that 'Two extreme age groups, i.e., pediatric and geriatric patients, are more susceptible to ADRs due to physiological and pathological factors.' However, among the special populations discussed, pregnant women face significant physiological changes affecting drug metabolism and distribution.",
                "tags": [
                 "Chapter 1","special_populations",
                    "drug_safety"
                ]
            },
            {
                "id": 9,
                "question": "What is the primary reason for using generic names in prescriptions?",
                "choices": [
                    "A. To promote specific brand loyalty",
                    "B. To ensure cost-effective medication options",
                    "C. To complicate medication tracking",
                    "D. To limit therapeutic alternatives"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Using generic names promotes rational use of medicines by allowing access to affordable alternatives. The text recommends 'using generic names of the medicine(s)' in prescriptions.",
                "tags": [
                 "Chapter 1","generic_medications",
                    "cost_effectiveness"
                ]
            },
            {
                "id": 10,
                "question": "Which of the following is NOT a standard precaution for infection control?",
                "choices": [
                    "A. Hand hygiene before and after patient contact",
                    "B. Use of personal protective equipment (PPE)",
                    "C. Routine cleaning of equipment and furniture",
                    "D. Administration of broad-spectrum antibiotics for all patients"
                ],
                "correctAnswer": 3,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Standard precautions include hand hygiene, PPE use, environmental cleaning, and safe disposal of sharps. Prophylactic antibiotic administration is not a standard precaution and contributes to antimicrobial resistance.",
                "tags": [
                 "Chapter 1","infection_control",
                    "standard_precautions"
                ]
            },
            {
                "id": 11,
                "question": "What is the recommended duration for completing infusion of lipid emulsions?",
                "choices": [
                    "A. Within 12 hours",
                    "B. Within 18 hours",
                    "C. Within 24 hours",
                    "D. Within 36 hours"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text specifies that 'Complete the infusion of lipid-containing solutions within 24 hours of hanging the solution' and 'Complete the infusion of lipid emulsions alone within 12 hours of hanging the solution.' For lipid emulsions specifically, the recommendation is within 12 hours.",
                "tags": [
                 "Chapter 1","parenteral_nutrition",
                    "medication_administration"
                ]
            },
            {
                "id": 12,
                "question": "Which factor is most critical when determining the dose of medications for children?",
                "choices": [
                    "A. Chronological age",
                    "B. Body surface area",
                    "C. Weight",
                    "D. Height"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "For pediatric dosing, 'Doses based on surface area are more likely to be correct, which makes it the common approach used for dose estimation of cytotoxic chemotherapeutic agents.' Surface area calculations account for both size and metabolic rate.",
                "tags": [
                 "Chapter 1","pediatric_dosing",
                    "special_populations"
                ]
            },
            {
                "id": 13,
                "question": "What is the primary goal of patient counseling in pharmacy practice?",
                "choices": [
                    "A. To increase pharmacy revenue",
                    "B. To ensure patients understand their medication regimen",
                    "C. To promote specific pharmaceutical brands",
                    "D. To reduce consultation time"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Patient counseling aims to improve health outcomes by ensuring patients understand how to take their medications correctly. The text emphasizes that 'Effective communication has been shown to improve not only patient satisfaction rates but also other health outcomes.'",
                "tags": [
                 "Chapter 1","patient_counseling",
                    "health_outcomes"
                ]
            },
            {
                "id": 14,
                "question": "Which of the following is a contraindication for chlorhexidine use in neonatal skin preparation?",
                "choices": [
                    "A. Gestational age less than 26 weeks",
                    "B. Postnatal age less than 2 months",
                    "C. Birth weight less than 1500 grams",
                    "B. Age less than two months"
                ],
                "correctAnswer": 3,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text states that 'A 2% chlorhexidine-based preparation is preferred, but there is no recommendation for its use in infants less than two months of age.'",
                "tags": [
                 "Chapter 1","chlorhexidine_contraindications",
                    "neonatal_care"
                ]
            },
            {
                "id": 15,
                "question": "What is the recommended approach for managing catheter-associated urinary tract infections (CAUTIs)?",
                "choices": [
                    "A. Routinely replace urinary catheters every 72 hours",
                    "B. Use antibiotic-coated catheters for all patients",
                    "C. Remove catheters as soon as possible when no longer clinically indicated",
                    "D. Administer prophylactic antibiotics to all catheterized patients"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text recommends that 'Remove catheters as soon as possible (preferably in the recovery area or when no longer indicated).' Unnecessary catheterization increases infection risk, and routine replacement or prophylactic antibiotics are not recommended.",
                "tags": [
                 "Chapter 1","catheter_associated_infections",
                    "urinary_tract_infections"
                ]
            },
            {
                "id": 16,
                "question": "Which statement about drug-drug interactions is correct?",
                "choices": [
                    "A. All drug interactions are harmful and should be avoided",
                    "B. Drug interactions can occur between medications and food/drink",
                    "C. Only prescription medications can interact with each other",
                    "D. Drug interactions are rare and unlikely to affect treatment outcomes"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Drug interactions 'include a reaction between two (or more) drugs or between a drug and a food, drink, or supplement/herbs.' While some interactions are harmful, others may be beneficial, and many common medications can interact with foods or supplements.",
                "tags": [
                 "Chapter 1","drug_interactions",
                    "medication_safety"
                ]
            },
            {
                "id": 17,
                "question": "What is the minimum information that must be included in a prescription according to standard guidelines?",
                "choices": [
                    "A. Patient's favorite color and hobbies",
                    "B. Generic name, dosage form, strength, directions, and prescriber details",
                    "C. Insurance coverage information",
                    "D. Detailed family medical history"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "A prescription should contain: 'Name, address, age, body weight of the medicine consumer and date of the prescription; Diagnosis; Generic name, dosage form and strength and directions for use of the medicines. The pharmaceutical form (for example ‘tablet’, ‘oral solution’, ‘eye ointment’, ‘cream’) should also be stated.'",
                "tags": [
                 "Chapter 1","prescription_components",
                    "medication_safety"
                ]
            },
            {
                "id": 18,
                "question": "Which population requires special consideration due to reduced lean body mass and increased fat percentage?",
                "choices": [
                    "A. Adolescent athletes",
                    "B. Pregnant women",
                    "C. Elderly patients",
                    "D. Professional cyclists"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text notes that 'Aged people have reduced lean body mass, reduced body water, and an increase in fat as a percentage of body mass. There is a decrease in serum albumin, and the ratio of bound to free medicine is significantly changed.' These physiological changes affect drug distribution and metabolism in elderly patients.",
                "tags": [
                 "Chapter 1","elderly_pharmacokinetics",
                    "special_populations"
                ]
            },
            {
                "id": 19,
                "question": "What is the recommended action when a patient reports an adverse drug reaction?",
                "choices": [
                    "A. Discontinue the medication immediately without investigation",
                    "B. Report the reaction to the Ethiopian Food and Drug Authority (EFDA)",
                    "C. Ignore the report as it may not be related to the medication",
                    "D. Increase the dose to overcome the side effect"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Health professionals have the responsibility 'to report any observed unique adverse reactions from drugs, vaccines or traditional herbal medicine products to Ethiopian Food and Drug Authority (EFDA).' Proper reporting helps monitor drug safety and prevent harm to other patients.",
                "tags": [
                 "Chapter 1","adverse_reaction_reporting",
                    "patient_safety"
                ]
            },
            {
                "id": 20,
                "question": "Which of the following is a key strategy for preventing catheter-related bloodstream infections (CRBSIs)?",
                "choices": [
                    "A. Routinely replacing central venous catheters every 72 hours",
                    "B. Using femoral vein insertion site for central lines",
                    "C. Removing unnecessary intravascular catheters promptly",
                    "D. Applying topical antibiotic ointments daily at insertion sites"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text recommends that 'Remove any intravascular catheter that is no longer essential. The risk of infection increases with the duration, increasing after more than three to six days at all catheter sites.' Prompt removal of unnecessary catheters is a key prevention strategy.",
                "tags": [
                 "Chapter 1","catheter_related_infections",
                    "intravascular_catheters"
                ]
            },
            {
                "id": 21,
                "question": "What is the recommended maximum duration for using the same peripheral intravenous catheter?",
                "choices": [
                    "A. 24 hours",
                    "B. 48 hours",
                    "C. 72 hours",
                    "D. 96 hours"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Peripheral intravenous catheters 'be removed or replaced as clinically indicated, rather than routine removal or replacement after a designated time period.' However, they should generally not be used beyond 48 hours unless clinically necessary.",
                "tags": [
                 "Chapter 1","peripheral_iv_catheters",
                    "intravenous_access"
                ]
            },
            {
                "id": 22,
                "question": "Which of the following is NOT a component of good clinical evaluation in outpatient settings?",
                "choices": [
                    "A. Observing the patient upon entry",
                    "B. Establishing rapport with the patient",
                    "C. Asking closed-ended questions only",
                    "D. Performing a complete physical examination"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Good clinical evaluation includes observing the patient, establishing rapport, listening attentively, asking open-ended questions initially, performing physical exams, and documenting findings. The text emphasizes using both open-ended and close-ended questions as appropriate.",
                "tags": [
                 "Chapter 1","clinical_evaluation",
                    "outpatient_care"
                ]
            },
            {
                "id": 23,
                "question": "What is the recommended approach for calculating pediatric doses when manufacturer information is unavailable?",
                "choices": [
                    "A. Use adult doses without adjustment",
                    "B. Calculate doses based on surface area",
                    "C. Estimate doses based on chronological age only",
                    "D. Double the adult dose for children under 5 years"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "When pediatric doses aren't provided by manufacturers, 'Calculations of doses based on surface area are more likely to be correct, which makes it the common approach used for dose estimation of cytotoxic chemotherapeutic agents.' Surface area calculations account for developmental differences better than age or weight alone.",
                "tags": [
                 "Chapter 1","pediatric_dosing",
                    "dose_calculation"
                ]
            },
            {
                "id": 24,
                "question": "Which factor is most important when deciding whether to prescribe antibiotics for a viral respiratory infection?",
                "choices": [
                    "A. Patient demand for medication",
                    "B. Presence of purulent nasal discharge",
                    "C. Recent travel history",
                    "D. Lack of bacterial infection evidence"
                ],
                "correctAnswer": 3,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational prescribing requires considering whether antibiotics are truly necessary. For viral infections, antibiotics are not indicated unless there's evidence of secondary bacterial infection. The text emphasizes avoiding irrational prescribing and dispensing of antimicrobials.",
                "tags": [
                 "Chapter 1","antibiotic_prescribing",
                    "viral_infections"
                ]
            },
            {
                "id": 25,
                "question": "What is the primary goal of the Access, Watch, and Reserve (AWaRe) classification system?",
                "choices": [
                    "A. To promote the use of newer, more expensive antibiotics",
                    "B. To enhance rational antibiotic use and combat antimicrobial resistance",
                    "C. To simplify hospital formulary management",
                    "D. To increase pharmaceutical industry profits"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The AWaRe classification aims 'to enhance the health facility's ability to contribute to the national antibiotic consumption and to reduce use of the antibiotics most at risk of resistance from the Watch and Reserve groups. Hence this will help to contain antimicrobial resistant by: Strengthening the capacity of the health-care facility's ASP to implement AMS; Aligning empirical antibiotic treatment with ACCESS antibiotics; Targeting WATCH and RESERVE groups for AMS.'",
                "tags": [
                 "Chapter 1","awarre_classification",
                    "antimicrobial_stewardship"
                ]
            },
            {
                "id": 26,
                "question": "Which of the following is a key component of palliative care according to the guidelines?",
                "choices": [
                    "A. Aggressive life-prolonging treatments",
                    "B. Symptom management and improving quality of life",
                    "C. Focusing exclusively on end-of-life care",
                    "D. Withholding all medications to prevent dependence"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care focuses on 'relieving suffering and improving the quality of life of patients with advanced illness and their families facing problems associated with life-threatening illness.' It involves comprehensive symptom management and support for patients with serious illnesses.",
                "tags": [
                 "Chapter 1","palliative_care",
                    "symptom_management"
                ]
            },
            {
                "id": 27,
                "question": "What is the recommended approach for managing febrile neutropenia in cancer patients?",
                "choices": [
                    "A. Start empiric antibiotics immediately",
                    "B. Wait for culture results before initiating treatment",
                    "C. Administer antipyretics only without antibiotics",
                    "D. Use narrow-spectrum antibiotics only"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "In immunocompromised patients like those with febrile neutropenia, 'Prompt initiation of effective preoperative antibiotics – most important (see 'Antimicrobial prophylaxis in surgery' section)' is emphasized. Empiric broad-spectrum antibiotics should be started immediately due to high risk of serious infection.",
                "tags": [
                 "Chapter 1","febrile_neutropenia",
                    "immunocompromised_patients"
                ]
            },
            {
                "id": 28,
                "question": "Which of the following is a contraindication for using aminoglycoside antibiotics?",
                "choices": [
                    "A. Pregnancy",
                    "B. Neonatal age",
                    "C. Renal impairment",
                    "D. Viral infections"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Aminoglycosides 'are incompatible with penicillin and heparin.' More importantly, they require dose adjustment in patients with renal impairment and have ototoxicity and nephrotoxicity risks. In neonates, their use requires special consideration due to immature kidney function.",
                "tags": [
                 "Chapter 1","aminoglycosides",
                    "contraindications",
                    "renal_impairment"
                ]
            },
            {
                "id": 29,
                "question": "What is the primary purpose of the Cockcroft-Gault formula in clinical practice?",
                "choices": [
                    "A. To estimate glomerular filtration rate (GFR) for drug dosing",
                    "B. To diagnose acute kidney injury",
                    "C. To monitor dialysis adequacy",
                    "D. To predict cardiovascular risk"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The Cockcroft-Gault formula is used 'to adjust doses of medications that are eliminated by the kidneys.' It calculates estimated GFR from serum creatinine, age, and weight, helping clinicians determine appropriate drug doses for patients with renal impairment.",
                "tags": [
                 "Chapter 1","cockcroft_gault_formula",
                    "renal_function",
                    "drug_dosing"
                ]
            },
            {
                "id": 30,
                "question": "Which of the following is a key principle of good prescribing practice?",
                "choices": [
                    "A. Always prescribe the newest medication available",
                    "B. Choose the least expensive option regardless of efficacy",
                    "C. Ensure the benefits outweigh the risks for each medication",
                    "D. Prescribe medications for non-medical reasons"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational approaches to therapeutics require careful evaluation of health problems and selecting appropriate strategies. The cornerstone is making the right diagnosis, followed by choosing treatments where 'the benefit-risk ratio of administering the medicine should always be considered prior to prescribing.'",
                "tags": [
                 "Chapter 1","good_prescribing",
                    "benefit_risk_ratio"
                ]
            },
            {
                "id": 31,
                "question": "What is the recommended maximum duration for using the same administration set for lipid emulsions?",
                "choices": [
                    "A. 12 hours",
                    "B. 24 hours",
                    "C. 72 hours",
                    "D. 96 hours"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text specifies that 'Replace administration sets, including secondary sets and add-on devices, no more frequently than at 72-hour intervals, unless clinically indicated.' For lipid emulsions specifically, 'Complete the infusion of lipid-containing solutions within 24 hours,' suggesting sets should be changed within 24 hours.",
                "tags": [
                 "Chapter 1","lipid_emulsions",
                    "administration_sets"
                ]
            },
            {
                "id": 32,
                "question": "Which population is at highest risk for adverse drug reactions due to altered drug metabolism?",
                "choices": [
                    "A. Children",
                    "B. Pregnant women",
                    "C. Elderly patients",
                    "D. Athletes"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text notes that 'Capacity to significantly metabolize drugs declines with age for some drugs. Phase I reactions carried out by microsomal P450 systems are affected more in elderly patients than phase II reactions.' Elderly patients often have reduced liver function and other age-related changes that affect drug metabolism.",
                "tags": [
                 "Chapter 1","elderly_pharmacokinetics",
                    "drug_metabolism"
                ]
            },
            {
                "id": 33,
                "question": "What is the recommended approach for managing pain in palliative care patients?",
                "choices": [
                    "A. Use only non-pharmacologic methods",
                    "B. Implement a stepwise analgesic ladder approach",
                    "C. Restrict opioid use to terminal stages only",
                    "D. Use fixed-dose regimens without individual titration"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care follows the WHO analgesic ladder approach, starting with non-opioids for mild pain, progressing to weak opioids for moderate pain, and strong opioids for severe pain. This stepwise approach allows for individualized pain management and regular reassessment.",
                "tags": [
                 "Chapter 1","palliative_pain_management",
                    "analgesic_ladder"
                ]
            },
            {
                "id": 34,
                "question": "Which of the following is a key component of infection prevention in intensive care units (ICUs)?",
                "choices": [
                    "A. Routine use of broad-spectrum antibiotics for all ICU patients",
                    "B. Strict adherence to hand hygiene protocols",
                    "C. Minimizing visitor access completely",
                    "D. Using hyperbaric oxygen therapy routinely"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "In ICUs, 'Measures to prevent spread of resistant organisms in the ICU include: Infection control measures such as good hand hygiene compliance; contact precautions for patients for drug-resistant organisms, and Minimizing unnecessary hospitalization and interventions.' Hand hygiene is consistently highlighted as the single most important infection control measure.",
                "tags": [
                 "Chapter 1","icu_infection_control",
                    "hand_hygiene"
                ]
            },
            {
                "id": 35,
                "question": "What is the recommended frequency for changing peripheral intravenous tubing used to administer blood products?",
                "choices": [
                    "A. Every 12 hours",
                    "B. Every 24 hours",
                    "C. Within 24 hours of initiation",
                    "D. Within 4 hours of initiation"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text specifies that 'Replace tubing used to administer blood, blood products, or lipid emulsions within 24 hours of initiating the infusion.' This applies to tubing used for blood products as well.",
                "tags": [
                 "Chapter 1","blood_product_infusion",
                    "intravenous_tubing"
                ]
            },
            {
                "id": 36,
                "question": "Which of the following is NOT a recognized type of drug interaction mechanism?",
                "choices": [
                    "A. Pharmacodynamic interactions",
                    "B. Pharmacokinetic interactions",
                    "C. Physicochemical interactions",
                    "D. Psychological interactions"
                ],
                "correctAnswer": 3,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Drug interactions occur at different levels including: 'Pharmaceutic, which are physicochemical interactions in an IV infusion or in the same solution; Pharmacokinetics, which may take place at the level of absorption, distribution, biotransformation or excretion; Pharmacodynamics, which could occur directly at receptor level.' Psychological interactions are not a recognized mechanism of drug interactions.",
                "tags": [
                 "Chapter 1","drug_interactions",
                    "interaction_mechanisms"
                ]
            },
            {
                "id": 37,
                "question": "What is the recommended approach for managing nausea and vomiting in palliative care patients?",
                "choices": [
                    "A. Use antiemetics only when vomiting becomes severe",
                    "B. Implement a proactive antiemetic regimen based on cause",
                    "C. Restrict fluid intake to prevent triggering episodes",
                    "D. Use only non-pharmacologic methods like acupressure"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for gastrointestinal symptoms involves 'Proactive use of antiemetics based on the underlying cause (e.g., bowel obstruction, increased intracranial pressure). Antiemetics should be given regularly rather than on an 'as needed' basis.' A proactive approach prevents suffering and improves quality of life.",
                "tags": [
                 "Chapter 1","palliative_nausea_vomiting",
                    "antiemetic_management"
                ]
            },
            {
                "id": 38,
                "question": "Which of the following is a contraindication for using tetracycline antibiotics?",
                "choices": [
                    "A. Pregnancy",
                    "B. Children under 8 years old",
                    "C. Patients with hypertension",
                    "D. Individuals with lactose intolerance"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Tetracyclines 'bind to calcium in the plastic containers and tubing' and are known to cause permanent discoloration of teeth when administered to children under 8 years of age. They're generally contraindicated in this population unless no suitable alternatives exist.",
                "tags": [
                 "Chapter 1","tetracyclines",
                    "contraindications",
                    "pediatric_medication"
                ]
            },
            {
                "id": 39,
                "question": "What is the recommended maximum duration for using the same peripheral intravenous catheter in adults?",
                "choices": [
                    "A. 24 hours",
                    "B. 48 hours",
                    "C. 72 hours",
                    "D. 96 hours"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text states that 'The risk of infection increases with the duration, increasing after more than three to six days at all catheter sites.' Peripheral intravenous catheters should typically be removed or replaced as clinically indicated, with 48 hours being a commonly referenced timeframe for routine replacement unless clinically necessary.",
                "tags": [
                 "Chapter 1","peripheral_iv_catheters",
                    "intravenous_access"
                ]
            },
            {
                "id": 40,
                "question": "Which of the following is a key component of good communication in clinical encounters?",
                "choices": [
                    "A. Using complex medical terminology",
                    "B. Maintaining eye contact and active listening",
                    "C. Rushing through the encounter to save time",
                    "D. Focusing solely on the medical chart rather than the patient"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Effective communication in clinical encounters involves 'Sit facing the patient, lean forward, establish eye contact and relax' as noted in the steps for clinical evaluation. Active listening, empathy, and clear explanation of diagnoses and treatment plans are fundamental components of good clinician-patient communication.",
                "tags": [
                 "Chapter 1","clinical_communication",
                    "patient_interaction"
                ]
            },
            {
                "id": 41,
                "question": "What is the recommended approach for managing dyspnea in palliative care patients?",
                "choices": [
                    "A. Administer oxygen routinely for all patients",
                    "B. Use a stepwise approach including non-pharmacologic and pharmacologic interventions",
                    "C. Restrict fluid intake to prevent pulmonary edema",
                    "D. Avoid using opioids due to respiratory depression concerns"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for respiratory symptoms involves 'Implementing a stepwise approach to relieve dyspnea, incorporating non-pharmacologic (e.g., fan, positioning) and pharmacologic (e.g., opioids) interventions.' Opioids are often used effectively to manage dyspnea in palliative care when titrated appropriately.",
                "tags": [
                 "Chapter 1","palliative_dyspnea",
                    "respiratory_symptoms"
                ]
            },
            {
                "id": 42,
                "question": "Which of the following is NOT a recommended component of safe medication storage and handling?",
                "choices": [
                    "A. Storing medications in their original labeled containers",
                    "B. Keeping medications in locked cabinets away from children",
                    "C. Storing liquid medications in direct sunlight",
                    "D. Regularly checking expiration dates"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Safe medication storage involves keeping medications 'in their original labeled containers' and 'in locked cabinets away from children.' Direct sunlight can degrade many medications, so storing them in cool, dry places away from light is recommended. Regularly checking expiration dates ensures medications remain potent and safe to use.",
                "tags": [
                 "Chapter 1","medication_storage",
                    "patient_safety"
                ]
            },
            {
                "id": 43,
                "question": "What is the recommended approach for managing constipation in palliative care patients?",
                "choices": [
                    "A. Use laxatives only when constipation becomes severe",
                    "B. Implement a proactive bowel regimen including stool softeners and stimulants",
                    "C. Restrict dietary fiber intake to prevent blockages",
                    "D. Use enemas as the primary treatment method"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for gastrointestinal symptoms involves 'Proactive use of laxatives and stool softeners based on etiology (e.g., opioid-induced constipation, immobility). Bowel regimens should be individualized and adjusted as needed.' A proactive approach prevents complications and maintains patient comfort.",
                "tags": [
                 "Chapter 1","palliative_constipation",
                    "bowel_regimen"
                ]
            },
            {
                "id": 44,
                "question": "Which of the following is a key principle of rational prescribing?",
                "choices": [
                    "A. Prescribe medications based on patient demand rather than medical need",
                    "B. Consider the total cost of treatment including efficacy, safety, and suitability",
                    "C. Always choose the newest medication available regardless of cost",
                    "D. Restrict prescriptions to specialists only"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational prescribing requires that 'The process should also consider efficacy, safety, suitability and availability. Medicine treatment should be individualized to the needs of each patient as much as possible.' Cost considerations are important, particularly in resource-limited settings, but should be balanced with efficacy and safety.",
                "tags": [
                 "Chapter 1","rational_prescribing",
                    "treatment_cost"
                ]
            },
            {
                "id": 45,
                "question": "What is the recommended approach for managing agitation in palliative care patients with delirium?",
                "choices": [
                    "A. Use physical restraints as first-line treatment",
                    "B. Identify and treat underlying causes while using symptomatic management",
                    "C. Administer high-dose sedatives routinely",
                    "D. Ignore behavioral symptoms as they are expected in terminally ill patients"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for neuropsychiatric symptoms involves 'Identifying reversible causes (e.g., pain, infection, metabolic abnormalities, medications) and treating them while providing symptomatic management.' Physical restraints should be avoided, and sedatives used cautiously with regular assessment.",
                "tags": [
                 "Chapter 1","palliative_delirium",
                    "agitation_management"
                ]
            },
            {
                "id": 46,
                "question": "Which of the following is a contraindication for using benzodiazepines in elderly patients?",
                "choices": [
                    "A. History of falls",
                    "B. Chronic obstructive pulmonary disease (COPD)",
                    "C. History of substance abuse",
                    "D. Concurrent use of antidepressants"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Benzodiazepines 'increase the risk of falls in the elderly' due to their sedative effects. The text notes that 'There is a change in the sensitivities of receptors to medicines in elderly people,' making them more susceptible to adverse effects including falls, which can lead to serious injuries in this population.",
                "tags": [
                 "Chapter 1","benzodiazepines",
                    "elderly_patients",
                    "falls_risk"
                ]
            },
            {
                "id": 47,
                "question": "What is the recommended maximum duration for using the same administration set for propofol infusions?",
                "choices": [
                    "A. 6 hours",
                    "B. 12 hours",
                    "C. 24 hours",
                    "D. 48 hours"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "The text specifies that 'Replace tubing used to administer propofol infusions every 6 to 12 hours, depending on its use, per the manufacturer's direction.' This reflects the instability of propofol in solution and the need for frequent changes to maintain potency and safety.",
                "tags": [
                 "Chapter 1","propofol_infusion",
                    "intravenous_tubing"
                ]
            },
            {
                "id": 48,
                "question": "Which of the following is a key component of good dispensing practice?",
                "choices": [
                    "A. Dispense medications in unmarked containers",
                    "B. Provide clear written instructions for medication use",
                    "C. Dispense only generic medications",
                    "D. Limit dispensing to weekdays only"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Good Dispensing Practices ensure that 'Dispensing includes all the activities that occur between the times the prescription or oral request of the patient or care provider is presented and the medicine is issued.' Key components include providing 'clear information' to patients, which should include written instructions reinforced by verbal counseling.",
                "tags": [
                 "Chapter 1","dispensing_practices",
                    "patient_education"
                ]
            },
            {
                "id": 49,
                "question": "What is the recommended approach for managing pruritus in palliative care patients?",
                "choices": [
                    "A. Use topical steroids as first-line treatment for all cases",
                    "B. Implement a multimodal approach including systemic and topical therapies",
                    "C. Avoid using antihistamines due to sedation concerns",
                    "D. Restrict bathing to once weekly to prevent drying skin"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for skin symptoms involves 'Considering the cause (e.g., cholestatic vs. uremic) and selecting appropriate topical and/or systemic therapies.' A multimodal approach is often needed, combining moisturizers, topical corticosteroids, antihistamines, and sometimes systemic agents depending on the underlying cause.",
                "tags": [
                 "Chapter 1","palliative_pruritus",
                    "skin_symptoms"
                ]
            },
            {
                "id": 50,
                "question": "Which of the following is NOT a recommended component of safe medication administration?",
                "choices": [
                    "A. Verify patient identity using two identifiers",
                    "B. Check medication label against order three times",
                    "C. Administer medications quickly to save time",
                    "D. Document administration promptly and accurately"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Safe medication administration requires careful verification and documentation. The text emphasizes the importance of 'Verify patient identity using two identifiers' and 'Document administration promptly and accurately.' Administering medications quickly compromises safety and accuracy.",
                "tags": [
                 "Chapter 1","medication_administration",
                    "patient_safety"
                ]
            },
            {
                "id": 51,
                "question": "What is the recommended approach for managing xerostomia (dry mouth) in palliative care patients?",
                "choices": [
                    "A. Use alcohol-based mouth rinses regularly",
                    "B. Maintain adequate hydration and use saliva substitutes",
                    "C. Restrict fluid intake to prevent pulmonary edema",
                    "D. Avoid using artificial saliva products"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for oral symptoms involves 'Maintaining adequate hydration and using saliva substitutes or sugar-free candies/gum to stimulate saliva production.' Alcohol-based products can be drying and irritating, so they should be avoided.",
                "tags": [
                 "Chapter 1","palliative_xerostomia",
                    "oral_health"
                ]
            },
            {
                "id": 52,
                "question": "Which of the following is a key principle of antimicrobial stewardship?",
                "choices": [
                    "A. Promote indiscriminate use of broad-spectrum antibiotics",
                    "B. Align empirical treatment with ACCESS antibiotics",
                    "C. Focus exclusively on reducing healthcare costs",
                    "D. Restrict all antibiotic use to specialized infectious disease consultants"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Antimicrobial stewardship aims 'to enhance the health facility's ability to contribute to the national antibiotic consumption and to reduce use of the antibiotics most at risk of resistance from the Watch and Reserve groups' by aligning empirical antibiotic treatment with ACCESS antibiotics whenever possible.",
                "tags": [
                 "Chapter 1","antimicrobial_stewardship",
                    "access_antibiotics"
                ]
            },
            {
                "id": 53,
                "question": "What is the recommended approach for managing insomnia in palliative care patients?",
                "choices": [
                    "A. Use long-acting hypnotics routinely for sleep induction",
                    "B. Address underlying causes and use short-acting hypnotics judiciously",
                    "C. Avoid using any sleep medications due to addiction potential",
                    "D. Recommend over-the-counter antihistamines as first-line treatment"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for sleep disturbances involves 'Addressing underlying causes (e.g., pain, dyspnea, anxiety) and using short-acting hypnotics judiciously.' Long-acting hypnotics can accumulate and cause excessive sedation, particularly in vulnerable palliative care patients.",
                "tags": [
                 "Chapter 1","palliative_insomnia",
                    "sleep_disturbances"
                ]
            },
            {
                "id": 54,
                "question": "Which of the following is a contraindication for using nonsteroidal anti-inflammatory drugs (NSAIDs) in elderly patients?",
                "choices": [
                    "A. History of peptic ulcer disease",
                    "B. Congestive heart failure",
                    "C. Mild arthritis",
                    "D. Well-controlled diabetes mellitus"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "NSAIDs 'should be avoided in patients with a history of peptic ulcer disease or GI bleeding.' Elderly patients are at higher risk for NSAID-induced ulcers and bleeding due to age-related changes in gastric mucosal defense mechanisms and comorbidities.",
                "tags": [
                 "Chapter 1","nsaids",
                    "elderly_patients",
                    "gastrointestinal_risk"
                ]
            },
            {
                "id": 55,
                "question": "What is the recommended approach for managing cachexia in palliative care patients?",
                "choices": [
                    "A. Restrict caloric intake to prevent weight gain",
                    "B. Implement nutritional support with high-calorie, high-protein diet",
                    "C. Use appetite stimulants routinely for all patients",
                    "D. Avoid enteral nutrition due to aspiration risk"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for cachexia involves 'Implementing nutritional support with high-calorie, high-protein diet and consider pharmacologic interventions (appetite stimulants, progestational agents) when appropriate.' Cachexia represents muscle wasting and requires nutritional support rather than calorie restriction.",
                "tags": [
                 "Chapter 1","palliative_cachexia",
                    "nutritional_support"
                ]
            },
            {
                "id": 56,
                "question": "Which of the following is a key component of safe intravenous catheter insertion?",
                "choices": [
                    "A. Insert catheters in the femoral vein for easy access",
                    "B. Use maximal barrier precautions including cap, mask, and sterile gloves",
                    "C. Clean the insertion site with an alcohol-based antiseptic",
                    "D. Insert catheters rapidly without regard for sterility"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Safe intravenous catheter insertion requires 'Disinfect clean skin with an appropriate antiseptic before catheter insertion.' The text recommends using '70% alcohol or an iodophor' for disinfection, along with maximal barrier precautions to prevent contamination.",
                "tags": [
                 "Chapter 1","iv_catheter_insertion",
                    "infection_control"
                ]
            },
            {
                "id": 57,
                "question": "What is the recommended approach for managing depression in palliative care patients?",
                "choices": [
                    "A. Use tricyclic antidepressants as first-line treatment",
                    "B. Screen for depression and use a combination of psychotherapy and antidepressants",
                    "C. Avoid using selective serotonin reuptake inhibitors (SSRIs) due to side effects",
                    "D. Treat with high-dose benzodiazepines for immediate sedation"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for psychological symptoms involves 'Screening for depression and using a combination of psychotherapy and antidepressants.' SSRIs are often preferred first-line agents due to favorable side effect profiles compared to older antidepressants.",
                "tags": [
                 "Chapter 1","palliative_depression",
                    "psychological_symptoms"
                ]
            },
            {
                "id": 58,
                "question": "Which of the following is a key principle of good prescribing practice regarding polypharmacy?",
                "choices": [
                    "A. Always prescribe the maximum number of medications to cover all possibilities",
                    "B. Regularly review and deprescribe unnecessary medications",
                    "C. Prescribe medications from different classes for similar indications",
                    "D. Avoid consulting参考资料 when uncertain about drug interactions"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Good prescribing practice involves 'Regularly reviewing and deprescribing unnecessary medications.' Polypharmacy increases the risk of adverse drug reactions and interactions, so regular medication reviews are essential to optimize therapy.",
                "tags": [
                 "Chapter 1","polypharmacy",
                    "medication_review"
                ]
            },
            {
                "id": 59,
                "question": "What is the recommended approach for managing lymphedema in palliative care patients?",
                "choices": [
                    "A. Use tight-fitting elastic bandages to reduce swelling",
                    "B. Implement gentle manual lymphatic drainage and compression garments",
                    "C. Restrict limb movement to prevent worsening",
                    "D. Avoid skin care to prevent irritation"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for lymphedema involves 'Implementing gentle manual lymphatic drainage and compression garments.' Tight bandages and restricted movement can worsen symptoms, while proper skin care is important to prevent complications.",
                "tags": [
                 "Chapter 1","palliative_lymphedema",
                    "swelling_management"
                ]
            },
            {
                "id": 60,
                "question": "Which of the following is NOT a recommended component of safe medication storage in community pharmacies?",
                "choices": [
                    "A. Store medications away from direct sunlight and heat sources",
                    "B. Keep medications in their original labeled containers",
                    "C. Store liquid medications in the refrigerator door compartments",
                    "D. Ensure medications are inaccessible to children"
                ],
                "correctAnswer": 2,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Medications should be stored 'away from direct sunlight and heat sources' and 'kept in their original labeled containers.' Refrigerator door compartments are subject to temperature fluctuations and should be avoided for medication storage. Medications should be stored in secure locations inaccessible to children.",
                "tags": [
                 "Chapter 1","medication_storage",
                    "community_pharmacy"
                ]
            },
            {
                "id": 61,
                "question": "What is the recommended approach for managing dysphagia in palliative care patients?",
                "choices": [
                    "A. Withhold all oral intake until formal swallowing evaluation",
                    "B. Implement texture-modified diets and position techniques during meals",
                    "C. Rely solely on parenteral nutrition for all patients",
                    "D. Encourage rapid eating to finish meals quickly"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for dysphagia involves 'Implementing texture-modified diets and position techniques during meals.' Formal swallowing evaluations may not be feasible in palliative care, and oral intake should be encouraged when safe rather than withheld entirely.",
                "tags": [
                 "Chapter 1","palliative_dysphagia",
                    "swallowing_disorders"
                ]
            },
            {
                "id": 62,
                "question": "Which of the following is a key principle of rational prescribing regarding cost considerations?",
                "choices": [
                    "A. Always prescribe the most expensive medication available",
                    "B. Consider the total cost of treatment including efficacy, safety, and suitability",
                    "C. Restrict prescriptions to low-cost generics only",
                    "D. Avoid discussing medication costs with patients"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational prescribing considers 'the total cost of treatment including efficacy, safety, suitability and availability.' While cost is important, particularly in resource-limited settings, it should be balanced with the medication's effectiveness and safety profile rather than focusing solely on price.",
                "tags": [
                 "Chapter 1","rational_prescribing",
                    "cost_considerations"
                ]
            },
            {
                "id": 63,
                "question": "What is the recommended approach for managing anxiety in palliative care patients?",
                "choices": [
                    "A. Use high-dose benzodiazepines for immediate sedation",
                    "B. Implement relaxation techniques and consider anxiolytics judiciously",
                    "C. Avoid psychological interventions due to time constraints",
                    "D. Prescribe antipsychotics as first-line treatment"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Palliative care for anxiety involves 'Implementing relaxation techniques and consider anxiolytics judiciously.' High-dose sedation should be avoided, and psychological interventions are valuable complements to pharmacotherapy.",
                "tags": [
                 "Chapter 1","palliative_anxiety",
                    "psychological_interventions"
                ]
            },
            {
                "id": 64,
                "question": "Which of the following is a contraindication for using metformin in patients with renal impairment?",
                "choices": [
                    "A. Serum creatinine >1.5 mg/dL in men",
                    "B. Estimated glomerular filtration rate (eGFR) <30 mL/min/1.73m²",
                    "C. Urine albumin-to-creatinine ratio >300 mg/g",
                    "D. Age over 65 years"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Metformin is contraindicated in patients with 'estimated glomerular filtration rate (eGFR) <30 mL/min/1.73m².' The Cockcroft-Gault formula is used to estimate GFR, and metformin should be avoided in severe renal impairment due to risk of lactic acidosis.",
                "tags": [
                 "Chapter 1","metformin",
                    "renal_impairment",
                    "contraindications"
                ]
            },
            {
                "id": 65,
                "question": "What is the recommended approach for managing constipation in pediatric palliative care patients?",
                "choices": [
                    "A. Use stimulant laxatives as first-line treatment",
                    "B. Implement dietary modifications and osmotic laxatives",
                    "C. Restrict fluid intake to prevent dehydration",
                    "D. Avoid using any laxatives due to concern about dependency"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for constipation involves 'Implementing dietary modifications and osmotic laxatives.' Stimulant laxatives may be used but should be chosen carefully. Adequate hydration is important, and laxatives are often necessary to manage constipation in this population.",
                "tags": [
                 "Chapter 1","pediatric_constipation",
                    "palliative_care"
                ]
            },
            {
                "id": 66,
                "question": "Which of the following is a key component of safe medication administration via syringe pumps?",
                "choices": [
                    "A. Use the same syringe for multiple medications",
                    "B. Flush the line thoroughly after each medication change",
                    "C. Set the flow rate as fast as possible to complete infusion quickly",
                    "D. Avoid labeling syringes clearly"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Safe medication administration via syringe pumps requires 'Flushing the line thoroughly after each medication change.' This prevents incompatibilities and ensures accurate delivery of subsequent medications. Syringes should be clearly labeled, and flow rates should be set according to recommended guidelines.",
                "tags": [
                 "Chapter 1","syringe_pump_administration",
                    "medication_safety"
                ]
            },
            {
                "id": 67,
                "question": "What is the recommended approach for managing nausea and vomiting in pediatric palliative care patients?",
                "choices": [
                    "A. Use ondansetron as first-line antiemetic for all ages",
                    "B. Implement age-appropriate antiemetics and address underlying causes",
                    "C. Restrict oral intake completely until symptoms resolve",
                    "D. Avoid using any antiemetics due to concerns about sedation"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for nausea and vomiting involves 'Implementing age-appropriate antiemetics and address underlying causes.' Different antiemetics may be preferred based on the child's age and the underlying cause of symptoms.",
                "tags": [
                 "Chapter 1","pediatric_nausea_vomiting",
                    "palliative_care"
                ]
            },
            {
                "id": 68,
                "question": "Which of the following is a key principle of rational prescribing regarding drug selection?",
                "choices": [
                    "A. Always choose the newest medication on the market",
                    "B. Select medications based on evidence of efficacy and safety for the condition",
                    "C. Prescribe medications from pharmaceutical companies offering gifts",
                    "D. Avoid using generic medications even when available"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational prescribing requires selecting medications 'based on evidence of efficacy and safety for the condition.' Newer medications may not have sufficient safety data, and generic medications are equally effective when bioequivalent.",
                "tags": [
                 "Chapter 1","rational_prescribing",
                    "drug_selection"
                ]
            },
            {
                "id": 69,
                "question": "What is the recommended approach for managing pain in pediatric palliative care patients?",
                "choices": [
                    "A. Use codeine-containing products as first-line analgesics",
                    "B. Implement a stepwise analgesic ladder approach tailored to the child's age and condition",
                    "C. Restrict opioid use due to concerns about addiction",
                    "D. Avoid using any analgesics until definitive diagnosis is confirmed"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for pain involves 'Implementing a stepwise analgesic ladder approach tailored to the child's age and condition.' Codeine is not recommended as first-line due to metabolism variability, and opioids should be used when needed for pain relief with appropriate monitoring.",
                "tags": [
                 "Chapter 1","pediatric_pain",
                    "palliative_care"
                ]
            },
            {
                "id": 70,
                "question": "Which of the following is a key component of safe medication storage in home settings?",
                "choices": [
                    "A. Store medications in bathroom cabinets near sinks",
                    "B. Keep medications in their original containers with labels intact",
                    "C. Store medications in direct sunlight to preserve potency",
                    "D. Share medications between family members"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Medications should be stored 'away from direct sunlight and heat sources' and 'kept in their original containers with labels intact.' Bathroom cabinets are often humid environments unsuitable for medication storage, and sharing medications is unsafe and should be avoided.",
                "tags": [
                 "Chapter 1","home_medication_storage",
                    "patient_safety"
                ]
            },
            {
                "id": 71,
                "question": "What is the recommended approach for managing agitation in pediatric palliative care patients?",
                "choices": [
                    "A. Use physical restraints routinely to prevent movement",
                    "B. Identify and treat underlying causes while using non-pharmacologic interventions",
                    "C. Administer high-dose sedatives as first-line treatment",
                    "D. Avoid any interventions to allow natural behavior expression"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for agitation involves 'Identify and treat underlying causes while using non-pharmacologic interventions.' Physical restraints should be avoided, and sedatives should be used cautiously only when necessary after addressing potential triggers.",
                "tags": [
                 "Chapter 1","pediatric_agitation",
                    "palliative_care"
                ]
            },
            {
                "id": 72,
                "question": "Which of the following is a key principle of rational prescribing regarding patient education?",
                "choices": [
                    "A. Provide minimal information to avoid overwhelming patients",
                    "B. Explain the purpose and proper use of medications clearly",
                    "C. Avoid discussing potential side effects to prevent anxiety",
                    "D. Rely solely on written instructions without verbal counseling"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational prescribing includes 'Explain the purpose and proper use of medications clearly.' Patient education is crucial for adherence to treatment regimens, and both written and verbal counseling should be provided to ensure understanding.",
                "tags": [
                 "Chapter 1","patient_education",
                    "rational_prescribing"
                ]
            },
            {
                "id": 73,
                "question": "What is the recommended approach for managing diarrhea in pediatric palliative care patients?",
                "choices": [
                    "A. Use antimotility agents routinely for all cases",
                    "B. Implement dietary modifications and address underlying causes",
                    "C. Restrict fluid intake to prevent dehydration",
                    "D. Avoid using any antidiarrheals due to concerns about ileus"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for diarrhea involves 'Implementing dietary modifications and address underlying causes.' Antimotility agents may be used cautiously, and adequate hydration is crucial to prevent dehydration.",
                "tags": [
                 "Chapter 1","pediatric_diarrhea",
                    "palliative_care"
                ]
            },
            {
                "id": 74,
                "question": "Which of the following is a key component of safe medication administration in long-term care facilities?",
                "choices": [
                    "A. Use medication carts that are left unlocked for convenience",
                    "B. Conduct regular medication reconciliation reviews",
                    "C. Administer all medications at the same time each day regardless of schedule",
                    "D. Avoid documenting administration to save time"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Safe medication administration in long-term care facilities requires 'Conduct regular medication reconciliation reviews.' This helps prevent errors, double-dosing, and interactions. Medication carts should be secured, and administration times should follow prescribed schedules.",
                "tags": [
                 "Chapter 1","long_term_care_medications",
                    "medication_safety"
                ]
            },
            {
                "id": 75,
                "question": "What is the recommended approach for managing dyspnea in pediatric palliative care patients?",
                "choices": [
                    "A. Use oxygen therapy routinely for all patients",
                    "B. Implement positioning and breathing techniques while addressing underlying causes",
                    "C. Restrict fluids to prevent pulmonary edema",
                    "D. Avoid using bronchodilators due to concerns about side effects"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for dyspnea involves 'Implement positioning and breathing techniques while addressing underlying causes.' Oxygen therapy should be used based on clinical indication rather than routinely, and bronchodilators may be beneficial for reversible airway obstruction.",
                "tags": [
                 "Chapter 1","pediatric_dyspnea",
                    "palliative_care"
                ]
            },
            {
                "id": 76,
                "question": "Which of the following is a key principle of rational prescribing regarding follow-up?",
                "choices": [
                    "A. Schedule follow-up appointments only when patients request them",
                    "B. Arrange timely follow-up to assess treatment response and modify therapy as needed",
                    "C. Avoid follow-up visits to reduce healthcare costs",
                    "D. Conduct follow-ups only annually regardless of treatment complexity"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational prescribing includes 'Arrange timely follow-up to assess treatment response and modify therapy as needed.' Follow-up is essential to ensure treatments are working effectively and to make adjustments as necessary.",
                "tags": [
                 "Chapter 1","follow_up",
                    "rational_prescribing"
                ]
            },
            {
                "id": 77,
                "question": "What is the recommended approach for managing constipation in pediatric palliative care patients?",
                "choices": [
                    "A. Use stimulant laxatives as first-line treatment",
                    "B. Implement dietary modifications and osmotic laxatives",
                    "C. Restrict fluid intake to prevent dehydration",
                    "D. Avoid using any laxatives due to concerns about dependency"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for constipation involves 'Implement dietary modifications and osmotic laxatives.' Stimulant laxatives may be used but should be chosen carefully based on the child's condition and previous responses.",
                "tags": [
                 "Chapter 1","pediatric_constipation",
                    "palliative_care"
                ]
            },
            {
                "id": 78,
                "question": "Which of the following is a key component of safe medication storage in tropical climates?",
                "choices": [
                    "A. Store medications in areas with high humidity and fluctuating temperatures",
                    "B. Keep medications in tightly sealed containers away from moisture and heat",
                    "C. Store medications in direct sunlight to prevent fungal growth",
                    "D. Avoid using desiccants or moisture absorbers"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "In tropical climates, medications should be stored 'in tightly sealed containers away from moisture and heat.' High humidity and temperature fluctuations can degrade many medications, so proper storage conditions are especially important.",
                "tags": [
                 "Chapter 1","medication_storage",
                    "tropical_climates"
                ]
            },
            {
                "id": 79,
                "question": "What is the recommended approach for managing nausea and vomiting in pediatric palliative care patients?",
                "choices": [
                    "A. Use ondansetron as first-line antiemetic for all ages",
                    "B. Implement a stepwise approach tailored to the child's age and condition",
                    "C. Restrict oral intake completely until symptoms resolve",
                    "D. Avoid using any antiemetics due to concerns about sedation"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for nausea and vomiting involves 'Implement a stepwise approach tailored to the child's age and condition.' Different antiemetics may be preferred based on the child's age and the underlying cause of symptoms.",
                "tags": [
                 "Chapter 1","pediatric_nausea_vomiting",
                    "palliative_care"
                ]
            },
            {
                "id": 80,
                "question": "Which of the following is a key principle of rational prescribing regarding documentation?",
                "choices": [
                    "A. Document only minimal information to save time",
                    "B. Record complete and accurate information about prescriptions and administrations",
                    "C. Use abbreviations extensively to save space",
                    "D. Avoid documenting allergies to prevent liability"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational prescribing requires 'Record complete and accurate information about prescriptions and administrations.' Complete documentation is essential for continuity of care, error prevention, and legal protection.",
                "tags": [
                 "Chapter 1","prescription_documentation",
                    "medical_records"
                ]
            },
            {
                "id": 81,
                "question": "What is the recommended approach for managing agitation in pediatric palliative care patients?",
                "choices": [
                    "A. Use physical restraints routinely to prevent movement",
                    "B. Identify and treat underlying causes while using non-pharmacologic interventions",
                    "C. Administer high-dose sedatives as first-line treatment",
                    "D. Avoid any interventions to allow natural behavior expression"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for agitation involves 'Identify and treat underlying causes while using non-pharmacologic interventions.' Physical restraints should be avoided, and sedatives should be used cautiously only when necessary after addressing potential triggers.",
                "tags": [
                 "Chapter 1","pediatric_agitation",
                    "palliative_care"
                ]
            },
            {
                "id": 82,
                "question": "Which of the following is a key component of safe medication administration in home health care?",
                "choices": [
                    "A. Allow family members to administer medications without training",
                    "B. Provide thorough patient and caregiver education on medication use",
                    "C. Administer all medications at night to avoid interrupting daily activities",
                    "D. Use verbal instructions only without written materials"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Safe medication administration in home health care requires 'Provide thorough patient and caregiver education on medication use.' Family caregivers should receive proper training, and both verbal and written instructions should be provided to ensure safe and effective medication administration.",
                "tags": [
                 "Chapter 1","home_healthcare_medications",
                    "patient_education"
                ]
            },
            {
                "id": 83,
                "question": "What is the recommended approach for managing dyspnea in pediatric palliative care patients?",
                "choices": [
                    "A. Use oxygen therapy routinely for all patients",
                    "B. Implement positioning and breathing techniques while addressing underlying causes",
                    "C. Restrict fluids to prevent pulmonary edema",
                    "D. Avoid using bronchodilators due to concerns about side effects"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for dyspnea involves 'Implement positioning and breathing techniques while addressing underlying causes.' Oxygen therapy should be used based on clinical indication rather than routinely, and bronchodilators may be beneficial for reversible airway obstruction.",
                "tags": [
                 "Chapter 1","pediatric_dyspnea",
                    "palliative_care"
                ]
            },
            {
                "id": 84,
                "question": "Which of the following is a key principle of rational prescribing regarding polypharmacy?",
                "choices": [
                    "A. Always prescribe the maximum number of medications to cover all possibilities",
                    "B. Regularly review and deprescribe unnecessary medications",
                    "C. Prescribe medications from different classes for similar indications",
                    "D. Avoid consulting参考资料 when uncertain about drug interactions"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Rational prescribing involves 'Regularly review and deprescribe unnecessary medications.' Polypharmacy increases the risk of adverse drug reactions and interactions, so regular medication reviews are essential to optimize therapy.",
                "tags": [
                 "Chapter 1","polypharmacy",
                    "medication_review"
                ]
            },
            {
                "id": 85,
                "question": "What is the recommended approach for managing lymphedema in pediatric palliative care patients?",
                "choices": [
                    "A. Use tight-fitting elastic bandages to reduce swelling",
                    "B. Implement gentle massage and compression garments",
                    "C. Restrict limb movement to prevent worsening",
                    "D. Avoid skin care to prevent irritation"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Pediatric palliative care for lymphedema involves 'Implement gentle massage and compression garments.' Tight bandages and restricted movement can worsen symptoms, while proper skin care is important to prevent complications.",
                "tags": [
                 "Chapter 1","pediatric_lymphedema",
                    "palliative_care"
                ]
            },
            {
                "id": 86,
                "question": "Which of the following is a key component of safe medication storage in community pharmacies?",
                "choices": [
                    "A. Store medications in areas with high traffic and exposure to elements",
                    "B. Keep medications in their original containers with labels intact",
                    "C. Store medications in direct sunlight to preserve potency",
                    "D. Avoid using desiccants or moisture absorbers"
                ],
                "correctAnswer": 1,
                "topic": "Chapter 1: Good Prescribing and Dispensing Practices",
                "explanation": "Medications should be stored 'in tightly sealed containers away from moisture and",
                "tags": [
                 "Chapter 1","pediatric_lymphedema",
                    "palliative_care"
                ]
            },
                  {
                    "id": 87,
                    "question": "A physician writes a prescription for a patient with a complicated urinary tract infection. Instead of writing 'take as directed,' which of the following instructions is most appropriate to ensure rational prescribing and patient adherence?",
                    "choices": [
                      "A. 'Take one tablet by mouth for the infection.'",
                      "B. 'Take one tablet by mouth every 12 hours for 7 days for urinary tract infection.'",
                      "C. 'Follow the instructions on the medicine bottle.'",
                      "D. 'Take as needed for urinary symptoms.'"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "According to Chapter 1 of the STG on Good Prescribing and Dispensing Practices, directions specifying the route, dose, and frequency should be clear and explicit. Phrases like 'take as directed' should be avoided. Option B provides the most complete and clear instructions for the patient and dispenser.",
                    "tags": ["Chapter 1", "Prescription Writing", "Application", "Core Practice"]
                  },
                  {
                    "id": 88,
                    "question": "A 72-year-old male with chronic kidney disease (eGFR estimated at 25 mL/min) is diagnosed with a severe bacterial infection requiring antibiotic therapy. The physician considers prescribing a renally excreted antibiotic. What is the most crucial step the physician must take before prescribing the medication?",
                    "choices": [
                      "A. Administer a standard adult dose and monitor for adverse effects.",
                      "B. Avoid all antibiotics and recommend supportive care only.",
                      "C. Adjust the dose of the antibiotic based on the patient's estimated GFR.",
                      "D. Prescribe a lower dose of the antibiotic and instruct the patient to take it with plenty of water."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "Chapter 1 emphasizes the importance of dose adjustment for renally excreted medicines in patients with renal failure. The STG recommends calculating the GFR and adjusting the dose based on this estimation to avoid toxicity. Simply monitoring for adverse effects after a standard dose is not sufficient and potentially harmful.",
                    "tags": ["Chapter 1", "Prescribing in Renal Failure", "Application", "Special Populations"]
                  },
                  {
                    "id": 89,
                    "question": "A 35-year-old pregnant woman in her first trimester presents with a non-life-threatening infection. The physician is considering prescribing a medication. According to the STG, what is the general recommendation for prescribing medicines during the first trimester?",
                    "choices": [
                      "A. Prescribe any medication as long as the benefit outweighs the risk.",
                      "B. Avoid prescribing any medication, if possible, unless it is proven to be safe.",
                      "C. Prescribe medications at a lower dose than for a non-pregnant woman.",
                      "D. Inform the patient of the risks and let her decide whether to take the medication."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "Chapter 1 of the STG advises against prescribing any medicine during any stage of pregnancy if possible, especially during the first trimester when organogenesis takes place, unless the medicine is proven safe or is for a life-threatening condition of the mother. The benefit-risk ratio should always be considered.",
                    "tags": ["Chapter 1", "Prescribing for Pregnant Women", "Application", "Special Populations"]
                  },
                  {
                    "id": 90,
                    "question": "A 6-month-old infant requires an oral medication that is inactivated by low pH in the gastric contents. Considering the physiological development of infants, what is a key pharmacokinetic factor the prescriber should be aware of?",
                    "choices": [
                      "A. Gastric acid secretion is higher in infants, leading to faster drug inactivation.",
                      "B. Gastric emptying time is prolonged in the first day of life, increasing drug absorption from the stomach.",
                      "C. Gastric acid secretion is slower in premature infants, potentially leading to better absorption of acid-labile drugs.",
                      "D. Gastrointestinal enzymes are higher in neonates, leading to faster metabolism of the drug in the gut."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "Chapter 1 states that in premature infants, gastric acid secretion is slower, with the highest concentration occurring on the fourth day. Therefore, medicines that are inactivated by low pH may be better absorbed orally in premature infants compared to older children or adults.",
                    "tags": ["Chapter 1", "Prescribing for Infants/Children", "Application", "Pharmacokinetics"]
                  },
                  {
                    "id": 91,
                    "question": "A patient with a history of schizophrenia is prescribed a new medication. The patient forgets to take the medication on some days because they feel better. Which factor is most likely contributing to the patient's non-adherence?",
                    "choices": [
                      "A. Nature of the treatment",
                      "B. Characteristics of the patient",
                      "C. Type of illness",
                      "D. Behavior of the prescriber"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "According to Chapter 1, 'Characteristics of the patient' is a factor contributing to non-adherence, which includes forgetfulness and stopping medication when feeling better.",
                    "tags": ["Chapter 1", "Patient Adherence", "Application", "Core Practice"]
                  },
                  {
                    "id": 92,
                    "question": "A health professional is reporting an adverse drug reaction (ADR) to the Ethiopian Food and Drug Authority (EFDA). The ADR was observed with a newly marketed drug and was not listed in the drug's information leaflet. Why is post-marketing surveillance for ADRs crucial?",
                    "choices": [
                      "A. Pre-marketing clinical trials are exhaustive and detect all possible ADRs.",
                      "B. Only the most common ADRs are typically detected during pre-marketing trials.",
                      "C. Pre-marketing trials recruit large and diverse populations, including all patient groups.",
                      "D. ADRs reported after marketing are usually less severe than those found in clinical trials."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "Chapter 1 explains that pre-marketing clinical trials have limitations, such as small population sizes and short duration, which means that only the most common ADRs are likely to be detected. Post-marketing surveillance is therefore essential for detecting rare or unique ADRs.",
                    "tags": ["Chapter 1", "Adverse Drug Reactions", "Application", "Pharmacovigilance"]
                  },
                  {
                    "id": 93,
                    "question": "A pharmacist is dispensing medication to a patient and notices that the prescription is written with the abbreviation 'QD'. To ensure good dispensing practice and patient safety, what should be the pharmacist's immediate action?",
                    "choices": [
                      "A. Dispense the medication as 'once a day' without clarification.",
                      "B. Contact the prescriber to clarify the frequency of administration.",
                      "C. Ask the patient how they were instructed to take the medication.",
                      "D. Refuse to dispense the medication due to the use of an unapproved abbreviation."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "While 'QD' is a known abbreviation for 'once a day', good prescribing and dispensing practices advocate for clarity to avoid medication errors. The use of abbreviations that are not consistent with the Système Internationale (SI) is discouraged. The safest action is to contact the prescriber for clarification to ensure the prescription is interpreted correctly.",
                    "tags": ["Chapter 1", "Good Dispensing Practice", "Application", "Patient Safety"]
                  },
                  {
                    "id": 94,
                    "question": "A 68-year-old woman with advanced liver disease, presenting with ascites and jaundice, requires a sedative for a procedure. The physician is aware that many sedatives are highly protein-bound. What is the primary concern when prescribing a highly protein-bound drug to this patient?",
                    "choices": [
                      "A. Reduced therapeutic effect due to increased protein binding.",
                      "B. Increased risk of toxicity due to reduced protein binding.",
                      "C. The drug will be metabolized too quickly by the liver.",
                      "D. The drug will not be absorbed properly from the gastrointestinal tract."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "Chapter 1 states that in patients with severe liver disease, hypoproteinemia is associated with reduced protein binding of drugs, leading to an increased concentration of the free, active form of the drug and thus an increased risk of toxicity.",
                    "tags": ["Chapter 1", "Prescribing in Liver Disease", "Application", "Pharmacokinetics"]
                  },
                  {
                    "id": 95,
                    "question": "A nurse is preparing an intravenous infusion and needs to add benzylpenicillin to a solution of dextrose. What potential pharmaceutic interaction should the nurse be aware of?",
                    "choices": [
                      "A. Benzylpenicillin will become more potent in the dextrose solution.",
                      "B. Benzylpenicillin will lose its potency due to the acidity of the dextrose solution.",
                      "C. The dextrose solution will crystallize when benzylpenicillin is added.",
                      "D. Benzylpenicillin will bind to the plastic IV bag, reducing its concentration."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "Chapter 1 provides an example of a pharmaceutic interaction, stating that benzylpenicillin and ampicillin lose potency after 6-8 hours when added to dextrose solutions due to the acidity of the solutions.",
                    "tags": ["Chapter 1", "Drug Interactions", "Application", "Pharmaceutics"]
                  },
                  {
                    "id": 96,
                    "question": "A hospital's drug and therapeutics committee is updating its essential medicines list (EML). What is the primary purpose of establishing and using a national EML, according to the WHO model mentioned in the STG?",
                    "choices": [
                      "A. To include all available medicines on the market to provide more choices for prescribers.",
                      "B. To satisfy the priority health care needs of the population with a limited list of medicines.",
                      "C. To promote the use of brand-name medicines over generic medicines.",
                      "D. To restrict the autonomy of prescribers in choosing medications for their patients."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 1: GOOD PRESCRIBING AND DISPENSING PRACTICES",
                    "explanation": "Chapter 1 explains that the WHO established the Model List of Essential Medicines to assist countries in formulating their own national lists. Essential medicines are defined as those that satisfy the priority health care needs of the population, and using an EML simplifies medicine management.",
                    "tags": ["Chapter 1", "Essential Medicines List", "Application", "Health Policy"]
                  },
                  {
                    "id": 97,
                    "question": "A 45-year-old man is admitted to the hospital with a severe community-acquired pneumonia. The local hospital's antibiogram shows high rates of resistance to macrolides for Streptococcus pneumoniae. According to the principles of antimicrobial stewardship outlined in the STG, what is the most appropriate initial action for the physician?",
                    "choices": [
                      "A. Prescribe a broad-spectrum carbapenem to cover all possible pathogens.",
                      "B. Withhold all antibiotics until a definitive culture and sensitivity result is available.",
                      "C. Start empiric therapy based on local susceptibility data and clinical severity, then de-escalate.",
                      "D. Administer a standard dose of azithromycin, as it is the usual treatment for pneumonia."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Chapter 2 emphasizes the importance of antimicrobial stewardship, which includes initiating empiric therapy based on local data for severe infections and then narrowing the spectrum (de-escalation) once pathogen and susceptibility are known. Waiting for culture results in a severely ill patient can be dangerous, and using the broadest-spectrum agent or an agent with known high resistance is inappropriate. (Page 33)",
                    "tags": ["Chapter 2", "Antimicrobial Stewardship", "Intermediate", "Page 33"]
                  },
                  {
                    "id": 98,
                    "question": "A hospital's infection control committee is investigating an outbreak of methicillin-resistant Staphylococcus aureus (MRSA). Which of the following is identified in the STG as a major contributing factor to the global spread of antimicrobial resistance (AMR)?",
                    "choices": [
                      "A. The use of antibiotics in animal husbandry.",
                      "B. Over-prescription of antibiotics by veterinarians.",
                      "C. Inappropriate use of antimicrobials in humans.",
                      "D. Spontaneous genetic mutations in bacteria."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The STG states that the major 'driver' for the development of AMR is the inappropriate use of antimicrobials. This includes over-prescribing, use of broad-spectrum agents when narrow-spectrum would suffice, and incorrect duration of therapy. While use in agriculture is a factor, inappropriate human use is the primary driver discussed. (Page 32)",
                    "tags": ["Chapter 2", "AMR Drivers", "Basic", "Page 32"]
                  },
                  {
                    "id": 99,
                    "question": "A patient is diagnosed with uncomplicated gonorrhea. The STG recommends a specific dual-therapy regimen to treat the infection and prevent resistance. What is the standard, recommended dual therapy for uncomplicated gonorrhea?",
                    "choices": [
                      "A. Azithromycin 1g orally as a single dose PLUS Ceftriaxone 500 mg IM as a single dose.",
                      "B. Doxycycline 100 mg orally twice daily for 7 days.",
                      "C. Ciprofloxacin 500 mg orally as a single dose.",
                      "D. Metronidazole 2g orally as a single dose."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "To prevent the development of resistance, particularly in Neisseria gonorrhoeae, the STG recommends dual therapy. The standard regimen is a single dose of intramuscular Ceftriaxone combined with a single oral dose of Azithromycin. (Page 39)",
                    "tags": ["Chapter 2", "Gonorrhea Treatment", "Intermediate", "Page 39"]
                  },
                  {
                    "id": 100,
                    "question": "A surgeon is preparing for a clean-contaminated surgical procedure (e.g., a cholecystectomy). To prevent surgical site infection (SSI), when is the optimal time to administer prophylactic antibiotics?",
                    "choices": [
                      "A. 24 hours before the surgical incision.",
                      "B. During the surgical procedure, just before closure.",
                      "C. Within 60 minutes before the surgical incision.",
                      "D. For 48 hours after the procedure is completed."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For effective surgical prophylaxis, bactericidal concentrations of the antibiotic must be present in the tissue at the time of incision. Therefore, the STG recommends administering the prophylactic antibiotic within 60 minutes before the incision is made. (Page 40)",
                    "tags": ["Chapter 2", "Surgical Prophylaxis", "Intermediate", "Page 40"]
                  },
                  {
                    "id": 101,
                    "question": "A 30-year-old female presents with symptoms of an uncomplicated urinary tract infection (cystitis). She has no known drug allergies. According to the STG, what is the preferred first-line agent for treating uncomplicated cystitis in this patient?",
                    "choices": [
                      "A. Ciprofloxacin for 3 days.",
                      "B. Amoxicillin for 7 days.",
                      "C. Nitrofurantoin for 5 days.",
                      "D. Ceftriaxone injection."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The STG lists Nitrofurantoin (100 mg orally twice daily for 5 days) as a first-line option for uncomplicated cystitis. Fluoroquinolones like Ciprofloxacin are generally reserved for more complicated cases due to resistance concerns, and amoxicillin has high rates of resistance from E. coli. (Page 37)",
                    "tags": ["Chapter 2", "UTI Treatment", "Intermediate", "Page 37"]
                  },
                  {
                    "id": 102,
                    "question": "A healthcare worker finishes examining a patient with a known Clostridioides difficile infection. What is the most effective method of hand hygiene to remove C. difficile spores?",
                    "choices": [
                      "A. Using an alcohol-based hand rub.",
                      "B. Washing hands with soap and water.",
                      "C. Wiping hands with a sterile gauze.",
                      "D. Wearing gloves is sufficient, no hand hygiene needed."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Alcohol-based hand rubs are not effective at killing Clostridioides difficile spores. The STG specifies that hand washing with soap and water is necessary to physically remove the spores after contact with a patient with C. difficile infection. (Page 43)",
                    "tags": ["Chapter 2", "Infection Control", "Basic", "Page 43"]
                  },
                  {
                    "id": 103,
                    "question": "A 6-year-old child is diagnosed with acute otitis media. The physician decides to prescribe an antibiotic. What is the recommended first-line antibiotic for this condition according to the STG?",
                    "choices": [
                      "A. Azithromycin for 3 days.",
                      "B. Amoxicillin high dose (80-90 mg/kg/day).",
                      "C. Ciprofloxacin ear drops.",
                      "D. Trimethoprim-sulfamethoxazole."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For acute otitis media, the STG recommends high-dose Amoxicillin as the first-line therapy due to its effectiveness against the most common causative organism, Streptococcus pneumoniae. (Page 35)",
                    "tags": ["Chapter 2", "Acute Otitis Media", "Intermediate", "Page 35"]
                  },
                  {
                    "id": 104,
                    "question": "A patient receiving long-term antibiotic therapy develops watery diarrhea and is diagnosed with pseudomembranous colitis caused by Clostridioides difficile. Which of the following is the most appropriate initial treatment for a non-severe case?",
                    "choices": [
                      "A. Continue the offending antibiotic and add a probiotic.",
                      "B. Stop the inciting antibiotic and start oral Metronidazole.",
                      "C. Administer intravenous Vancomycin.",
                      "D. Prescribe an anti-diarrheal agent like Loperamide."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The first step in managing C. difficile infection is to discontinue the offending antibiotic if possible. For a non-severe initial episode, oral Metronidazole is the recommended first-line treatment. Loperamide should be avoided as it can worsen the condition. (Page 37)",
                    "tags": ["Chapter 2", "C. difficile Treatment", "Intermediate", "Page 37"]
                  },
                  {
                    "id": 105,
                    "question": "Which of the following scenarios represents a 'pharmacodynamic interaction' leading to enhanced drug effect?",
                    "choices": [
                      "A. A patient on warfarin taking an NSAID, leading to an increased risk of bleeding.",
                      "B. Rifampicin inducing the metabolism of oral contraceptives, leading to reduced efficacy.",
                      "C. Antacids reducing the absorption of tetracycline from the gut.",
                      "D. Probenecid blocking the renal excretion of penicillin, leading to higher blood levels."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "A pharmacodynamic interaction is where one drug modifies the effect of another at the receptor or site of action. Both warfarin and NSAIDs affect hemostasis (warfarin by inhibiting clotting factors, NSAIDs by inhibiting platelet function), and their concurrent use additively increases the risk of bleeding. The other options describe pharmacokinetic interactions (metabolism, absorption, excretion). (Page 34)",
                    "tags": ["Chapter 2", "Drug Interactions", "Advanced", "Page 34"]
                  },
                  {
                    "id": 106,
                    "question": "A hospital is implementing an antimicrobial stewardship program. Which core strategy involves reviewing antibiotic use after 48-72 hours to adjust therapy based on new clinical and microbiological data?",
                    "choices": [
                      "A. Formulary restriction.",
                      "B. Prospective audit and feedback.",
                      "C. Preauthorization.",
                      "D. Education and guidelines."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Prospective audit and feedback is a core antimicrobial stewardship strategy where a team reviews antimicrobial orders and provides real-time recommendations to the prescriber. This often happens at the 48-72 hour mark when more data is available, allowing for de-escalation or optimization of therapy. (Page 33)",
                    "tags": ["Chapter 2", "Antimicrobial Stewardship", "Intermediate", "Page 33"]
                  },
                  {
                    "id": 107,
                    "question": "A 25-year-old man presents with a sore throat, fever, and swollen tonsils. A rapid antigen test is positive for Group A Streptococcus. He has a documented severe anaphylactic reaction to penicillin. Which of the following is the most appropriate alternative antibiotic?",
                    "choices": [
                      "A. Amoxicillin.",
                      "B. Cephalexin.",
                      "C. Azithromycin.",
                      "D. Vancomycin."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For patients with streptococcal pharyngitis and a severe penicillin allergy (anaphylaxis), a macrolide like Azithromycin is the recommended alternative. Cephalosporins should be avoided due to the potential for cross-reactivity in severe penicillin allergies. Amoxicillin is a penicillin and is contraindicated. (Page 35)",
                    "tags": ["Chapter 2", "Strep Pharyngitis", "Intermediate", "Page 35"]
                  },
                  {
                    "id": 108,
                    "question": "What is the primary rationale for using combination therapy, such as in the treatment of tuberculosis or HIV?",
                    "choices": [
                      "A. To decrease the cost of treatment.",
                      "B. To reduce the pill burden for the patient.",
                      "C. To prevent the emergence of resistant microbial strains.",
                      "D. To increase the absorption of the primary drug."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "A key principle of antimicrobial therapy for diseases like TB and HIV is the use of multiple drugs simultaneously. This strategy is primarily employed to suppress the emergence of microbial strains that are resistant to any single agent in the regimen. (Page 34)",
                    "tags": ["Chapter 2", "Combination Therapy", "Basic", "Page 34"]
                  },
                  {
                    "id": 109,
                    "question": "According to the 'Five Moments for Hand Hygiene' guideline, which of the following is a critical moment when hand hygiene must be performed?",
                    "choices": [
                      "A. After leaving the patient's room.",
                      "B. Before touching a patient.",
                      "C. After documenting in the patient's chart.",
                      "D. Before entering the hospital ward."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The WHO 'Five Moments for Hand Hygiene' identifies key points to prevent transmission of pathogens. 'Before touching a patient' is the first moment and is critical to protect the patient from harmful germs carried on the healthcare worker's hands. (Page 43)",
                    "tags": ["Chapter 2", "Hand Hygiene", "Basic", "Page 43"]
                  },
                  {
                    "id": 110,
                    "question": "A patient with a history of rheumatic fever requires dental extraction. To prevent infective endocarditis, the STG recommends antibiotic prophylaxis. What is the standard prophylactic regimen for an adult patient who can take oral medication and is not allergic to penicillin?",
                    "choices": [
                      "A. Clindamycin 600 mg orally 1 hour before the procedure.",
                      "B. Azithromycin 500 mg orally 1 hour before the procedure.",
                      "C. Vancomycin 1g IV infused over 1 hour.",
                      "D. Amoxicillin 2g orally 1 hour before the procedure."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For high-risk patients undergoing dental procedures likely to cause bacteremia, prophylaxis is recommended. The standard oral regimen for adults is a single 2g dose of Amoxicillin administered 30-60 minutes before the procedure. (Page 42)",
                    "tags": ["Chapter 2", "Endocarditis Prophylaxis", "Intermediate", "Page 42"]
                  },
                  {
                    "id": 111,
                    "question": "A 55-year-old man with cellulitis is being treated with intravenous antibiotics. After 72 hours, his fever has resolved, and the erythema is receding. He is able to tolerate oral intake. What is the most appropriate next step in his management, according to stewardship principles?",
                    "choices": [
                      "A. Continue IV antibiotics for a total of 14 days.",
                      "B. Switch to an appropriate oral antibiotic to complete the course of therapy.",
                      "C. Discharge the patient with a prescription for topical antibiotics.",
                      "D. Stop all antibiotics as the infection is clearly resolving."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "A key principle of antimicrobial stewardship is to switch from intravenous (IV) to oral (PO) therapy as soon as the patient is clinically stable, afebrile, and able to absorb oral medications. This reduces the risk of line infections, lowers costs, and facilitates earlier discharge. (Page 33)",
                    "tags": ["Chapter 2", "IV to PO Switch", "Intermediate", "Page 33"]
                  },
                  {
                    "id": 112,
                    "question": "The development of a thick, extracellular polysaccharide matrix that protects bacteria from host defenses and antibiotics is known as what mechanism of resistance?",
                    "choices": [
                      "A. Efflux pump formation.",
                      "B. Target site modification.",
                      "C. Biofilm formation.",
                      "D. Enzymatic inactivation."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Biofilm formation is a mechanism where bacteria adhere to surfaces and produce a protective slime layer. This biofilm acts as a physical barrier, preventing antibiotics from reaching the bacteria and contributing significantly to chronic infections and resistance. (Page 32)",
                    "tags": ["Chapter 2", "AMR Mechanisms", "Advanced", "Page 32"]
                  },
                  {
                    "id": 113,
                    "question": "For a clean surgical procedure, such as a hernia repair without a mesh, what is the general recommendation for antimicrobial prophylaxis?",
                    "choices": [
                      "A. Prophylaxis is always required with a first-generation cephalosporin.",
                      "B. Prophylaxis is generally not recommended.",
                      "C. Prophylaxis with vancomycin should be given.",
                      "D. Prophylaxis should be continued for 3 days post-operatively."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The STG indicates that for clean surgical procedures where there is no entry into the respiratory, gastrointestinal, or genitourinary tracts, the risk of infection is low. Therefore, antimicrobial prophylaxis is generally not recommended unless specific patient risk factors are present. (Page 40)",
                    "tags": ["Chapter 2", "Surgical Prophylaxis", "Intermediate", "Page 40"]
                  },
                  {
                    "id": 114,
                    "question": "A patient is prescribed Trimethoprim-Sulfamethoxazole (TMP-SMX). Which of the following mechanisms best describes how this combination antibiotic works?",
                    "choices": [
                      "A. It inhibits bacterial cell wall synthesis.",
                      "B. It inhibits bacterial protein synthesis at the 50S ribosomal subunit.",
                      "C. It disrupts bacterial DNA gyrase.",
                      "D. It sequentially inhibits enzymes in the bacterial folic acid synthesis pathway."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "TMP-SMX is a classic example of synergistic combination therapy. Sulfamethoxazole inhibits an early step in folic acid synthesis, and Trimethoprim inhibits a later step. This sequential blockade is more effective than either agent alone. (Page 34)",
                    "tags": ["Chapter 2", "Mechanism of Action", "Advanced", "Page 34"]
                  },
                  {
                    "id": 115,
                    "question": "Which of the following personal protective equipment (PPE) is essential for a healthcare worker to wear when entering the room of a patient on airborne precautions (e.g., for pulmonary tuberculosis)?",
                    "choices": [
                      "A. Surgical mask and gown.",
                      "B. N95 respirator mask.",
                      "C. Gown and shoe covers.",
                      "D. Face shield and gloves."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For diseases transmitted by the airborne route, small droplet nuclei can remain suspended in the air. Standard surgical masks are insufficient. An N95 respirator, which is designed to filter these small particles, is required to be worn by anyone entering the patient's room. (Page 44)",
                    "tags": ["Chapter 2", "Infection Control", "Basic", "Page 44"]
                  },
                  {
                    "id": 116,
                    "question": "A 40-year-old woman is treated for a severe skin and soft tissue infection caused by MRSA. Which of the following antibiotics is generally considered a drug of choice for treating severe, invasive MRSA infections?",
                    "choices": [
                      "A. Ampicillin.",
                      "B. Cefazolin.",
                      "C. Vancomycin.",
                      "D. Metronidazole."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Methicillin-resistant Staphylococcus aureus (MRSA) is, by definition, resistant to all beta-lactam antibiotics including penicillins and cephalosporins. Vancomycin is a glycopeptide antibiotic and remains a primary treatment for severe infections caused by MRSA. (Page 36)",
                    "tags": ["Chapter 2", "MRSA Treatment", "Intermediate", "Page 36"]
                  },{
                    "id": 117,
                    "question": "A 22-year-old university student is identified as a close contact of a patient with meningococcal meningitis. According to the STG, what is the recommended chemoprophylaxis regimen for this adult to prevent secondary infection?",
                    "choices": [
                      "A. A single dose of Amoxicillin 2g orally.",
                      "B. A single dose of Ciprofloxacin 500 mg orally.",
                      "C. A 7-day course of Doxycycline 100 mg orally twice daily.",
                      "D. A single dose of intramuscular Penicillin G."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For post-exposure prophylaxis of meningococcal meningitis in adults, the STG recommends a single oral dose of Ciprofloxacin 500 mg as one of the first-line options. Other options include Rifampicin or Ceftriaxone, but Ciprofloxacin is a convenient and effective choice. (Page 42)",
                    "tags": ["Chapter 2", "Chemoprophylaxis", "Intermediate", "Page 42"]
                  },
                  {
                    "id": 118,
                    "question": "A hospital is trying to reduce the incidence of catheter-associated urinary tract infections (CAUTI). Which of the following interventions is a key principle of infection prevention for indwelling urinary catheters?",
                    "choices": [
                      "A. Irrigating the catheter daily with a sterile saline solution.",
                      "B. Changing the indwelling catheter every 48 hours.",
                      "C. Using the largest possible catheter size to ensure adequate drainage.",
                      "D. Maintaining a closed drainage system and ensuring unobstructed urine flow."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "To prevent CAUTI, the STG emphasizes several crucial measures, including the aseptic insertion of the catheter and the maintenance of a closed, sterile drainage system. Keeping the system closed prevents the entry of microorganisms into the bladder. Daily irrigation and routine changes are not recommended. (Page 45)",
                    "tags": ["Chapter 2", "Infection Control", "Intermediate", "Page 45"]
                  },
                  {
                    "id": 119,
                    "question": "A pharmaceutical company is developing a new antibiotic that works by inhibiting DNA gyrase, an enzyme essential for bacterial DNA replication. This mechanism of action is characteristic of which class of antibiotics?",
                    "choices": [
                      "A. Macrolides",
                      "B. Beta-lactams",
                      "C. Fluoroquinolones",
                      "D. Aminoglycosides"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Fluoroquinolones, such as Ciprofloxacin and Levofloxacin, exert their bactericidal effect by inhibiting bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, which are necessary for the synthesis of bacterial DNA. (Page 36)",
                    "tags": ["Chapter 2", "Mechanism of Action", "Advanced", "Page 36"]
                  },
                  {
                    "id": 120,
                    "question": "A patient is prescribed an antibiotic that has a high 'post-antibiotic effect' (PAE). What is the clinical implication of a drug having a long PAE?",
                    "choices": [
                      "A. The drug can be dosed less frequently, even when its concentration falls below the MIC.",
                      "B. The drug is more likely to cause significant side effects.",
                      "C. The drug must be administered via continuous infusion.",
                      "D. The drug is only effective against gram-positive bacteria."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The post-antibiotic effect (PAE) is the persistent suppression of bacterial growth after a brief exposure to an antibiotic. Drugs with a significant PAE (like aminoglycosides) can often be given in single, high-dose daily regimens because bacterial regrowth is suppressed even when drug levels are low. (Page 34)",
                    "tags": ["Chapter 2", "Pharmacodynamics", "Advanced", "Page 34"]
                  },
                  {
                    "id": 121,
                    "question": "A 50-year-old patient with a prosthetic heart valve undergoes a colonoscopy with biopsy. To prevent infective endocarditis, prophylaxis is considered. What is the recommended antibiotic regimen for this high-risk patient if they are allergic to penicillin?",
                    "choices": [
                      "A. No prophylaxis is needed for a colonoscopy.",
                      "B. Amoxicillin 2g orally one hour before the procedure.",
                      "C. Clindamycin 600 mg IV 30-60 minutes before the procedure.",
                      "D. Gentamicin 1.5 mg/kg IV before the procedure."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Prosthetic heart valves place a patient in a high-risk category for infective endocarditis. For gastrointestinal procedures like a colonoscopy in a high-risk patient with a penicillin allergy, an intravenous agent like Clindamycin is a recommended alternative. (Page 42)",
                    "tags": ["Chapter 2", "Endocarditis Prophylaxis", "Advanced", "Page 42"]
                  },
                  {
                    "id": 122,
                    "question": "Which of the following describes the process of 'disinfection' in a healthcare setting?",
                    "choices": [
                      "A. The complete elimination of all forms of microbial life, including bacterial spores.",
                      "B. The removal of visible soil and organic material from objects and surfaces.",
                      "C. A process that eliminates many or all pathogenic microorganisms, except bacterial spores, on inanimate objects.",
                      "D. The reduction of the number of microorganisms on the skin."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The STG defines disinfection as a process that eliminates most pathogenic microorganisms but not necessarily bacterial spores. This distinguishes it from sterilization, which kills all microbial life, and cleaning, which is the physical removal of dirt. (Page 44)",
                    "tags": ["Chapter 2", "Infection Control", "Basic", "Page 44"]
                  },
                  {
                    "id": 123,
                    "question": "A patient with suspected sepsis is started on empiric broad-spectrum antibiotics. After 48 hours, blood cultures grow Pseudomonas aeruginosa, which is sensitive to piperacillin-tazobactam but resistant to the empiric agent used. What is the most appropriate stewardship action?",
                    "choices": [
                      "A. Continue the current broad-spectrum agent to cover other potential pathogens.",
                      "B. Add piperacillin-tazobactam to the current antibiotic regimen.",
                      "C. Stop the initial antibiotic and switch to piperacillin-tazobactam.",
                      "D. Stop all antibiotics and observe the patient."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "This scenario is a prime example of 'de-escalation' in antimicrobial stewardship. Once the specific pathogen and its susceptibilities are known, the empiric broad-spectrum therapy should be stopped and replaced with a narrower, targeted antibiotic like piperacillin-tazobactam to effectively treat the infection and reduce selective pressure for resistance. (Page 33)",
                    "tags": ["Chapter 2", "Antimicrobial Stewardship", "Intermediate", "Page 33"]
                  },
                  {
                    "id": 124,
                    "question": "A 28-year-old male is diagnosed with acute bacterial prostatitis. This condition often requires prolonged antibiotic therapy compared to uncomplicated cystitis. What is the primary reason for the extended duration of treatment?",
                    "choices": [
                      "A. The causative organisms are typically more resistant.",
                      "B. The high pH of prostatic fluid inactivates most antibiotics.",
                      "C. Poor penetration of most antimicrobial agents into prostatic tissue.",
                      "D. Patients with prostatitis are often immunocompromised."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The prostate is a difficult tissue for many antibiotics to penetrate effectively. To achieve adequate bactericidal concentrations at the site of infection and to prevent relapse or chronic infection, a longer course of therapy (typically 4-6 weeks) with an agent that has good prostatic penetration (like fluoroquinolones) is required. (Page 38)",
                    "tags": ["Chapter 2", "Prostatitis Treatment", "Advanced", "Page 38"]
                  },
                  {
                    "id": 125,
                    "question": "A healthcare facility is selecting a skin antiseptic for use before surgical procedures. Which of the following is an important characteristic of an ideal antiseptic agent?",
                    "choices": [
                      "A. A narrow spectrum of activity to avoid disrupting normal flora.",
                      "B. Slow onset of action to allow for thorough application.",
                      "C. A broad spectrum of activity and a persistent (residual) effect.",
                      "D. Inactivation by the presence of organic matter like blood."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "An ideal antiseptic for surgical preparation should be fast-acting, have a broad spectrum of activity against various microorganisms, and have a persistent or residual effect to suppress microbial regrowth for the duration of the surgery. (Page 44)",
                    "tags": ["Chapter 2", "Infection Control", "Intermediate", "Page 44"]
                  },
                  {
                    "id": 126,
                    "question": "A 3-year-old child presents with a 3-day history of non-bloody diarrhea without fever or signs of severe dehydration. The parents request an antibiotic to help the child recover faster. What is the most appropriate management?",
                    "choices": [
                      "A. Prescribe a 5-day course of Metronidazole.",
                      "B. Prescribe a 3-day course of Ciprofloxacin.",
                      "C. Advise on supportive care with oral rehydration solution and explain that antibiotics are not indicated.",
                      "D. Administer a single dose of intramuscular Ceftriaxone."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Most cases of acute watery diarrhea are viral and self-limiting. The STG advises that antibiotics are not indicated for non-severe, non-bloody diarrhea. The cornerstone of management is preventing dehydration with oral rehydration solution (ORS). Unnecessary antibiotic use contributes to resistance. (Page 37)",
                    "tags": ["Chapter 2", "Rational Use", "Basic", "Page 37"]
                  },
                  {
                    "id": 127,
                    "question": "A bacterium develops resistance to a beta-lactam antibiotic by altering the structure of its penicillin-binding proteins (PBPs). What mechanism of resistance does this represent?",
                    "choices": [
                      "A. Enzymatic inactivation of the drug.",
                      "B. Decreased drug permeability or increased efflux.",
                      "C. Formation of a protective biofilm.",
                      "D. Modification of the antibiotic's target site."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The mechanism of action of beta-lactam antibiotics is to bind to PBPs and inhibit cell wall synthesis. When bacteria alter the structure of these PBPs, the antibiotic can no longer bind effectively, rendering it useless. This is a classic example of target site modification, famously seen in MRSA. (Page 32)",
                    "tags": ["Chapter 2", "AMR Mechanisms", "Advanced", "Page 32"]
                  },
                  {
                    "id": 128,
                    "question": "A 65-year-old man is hospitalized with a healthcare-associated pneumonia (HCAP). The hospital's antibiogram indicates a high prevalence of multi-drug resistant organisms, including Pseudomonas aeruginosa. Which of the following antibiotics provides reliable anti-pseudomonal coverage?",
                    "choices": [
                      "A. Ertapenem",
                      "B. Amoxicillin-clavulanate",
                      "C. Ceftriaxone",
                      "D. Piperacillin-tazobactam"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "When treating infections where Pseudomonas aeruginosa is suspected, it is crucial to select an antibiotic with specific activity against it. Piperacillin-tazobactam is a beta-lactam/beta-lactamase inhibitor combination known for its robust anti-pseudomonal coverage. Ceftriaxone, Ertapenem, and Amoxicillin-clavulanate do not have reliable activity against Pseudomonas. (Page 36)",
                    "tags": ["Chapter 2", "HCAP Treatment", "Intermediate", "Page 36"]
                  },
                  {
                    "id": 129,
                    "question": "Which of the following practices is a major contributor to the spread of antimicrobial resistance in the community setting?",
                    "choices": [
                      "A. Completing the full prescribed course of antibiotics for a bacterial infection.",
                      "B. Using leftover antibiotics from a previous illness to treat new symptoms.",
                      "C. Getting vaccinated to prevent bacterial and viral infections.",
                      "D. Washing hands frequently with soap and water."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The STG identifies the misuse and overuse of antimicrobials as the main drivers of resistance. Using leftover antibiotics is a form of self-medication that is often inappropriate, as the drug may be wrong for the new illness or the dose may be insufficient, promoting the selection of resistant bacteria. (Page 32)",
                    "tags": ["Chapter 2", "AMR Drivers", "Basic", "Page 32"]
                  },
                  {
                    "id": 130,
                    "question": "A hospital's Drug and Therapeutics Committee (DTC) decides to restrict the use of carbapenems, requiring infectious disease specialist approval for their prescription. What is the primary goal of this antimicrobial stewardship intervention?",
                    "choices": [
                      "A. To increase the hospital's pharmacy revenue.",
                      "B. To reduce the overall cost of medications used in the hospital.",
                      "C. To preserve the effectiveness of last-resort antibiotics by controlling their use.",
                      "D. To simplify the prescribing process for physicians."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Carbapenems are broad-spectrum, last-resort antibiotics. Their overuse drives resistance, leaving few options for treating multi-drug resistant infections. Formulary restriction and preauthorization are stewardship strategies aimed at ensuring these critical agents are used only when absolutely necessary, thus preserving their efficacy for future patients. (Page 33)",
                    "tags": ["Chapter 2", "Antimicrobial Stewardship", "Intermediate", "Page 33"]
                  },
                  {
                    "id": 131,
                    "question": "A 34-year-old female presents with a second recurrence of an uncomplicated urinary tract infection within six months. What is the most appropriate next step in management?",
                    "choices": [
                      "A. Prescribe the same short-course antibiotic that was used previously.",
                      "B. Advise the patient to increase cranberry juice intake.",
                      "C. Obtain a urine culture and sensitivity before initiating treatment.",
                      "D. Refer the patient for a surgical evaluation of the urinary tract."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For recurrent UTIs, it is important to identify the causative organism and its susceptibility pattern to guide effective therapy and rule out resistance to previously used agents. Therefore, a urine culture should be obtained before starting empiric treatment. (Page 37)",
                    "tags": ["Chapter 2", "Recurrent UTI", "Intermediate", "Page 37"]
                  },
                  {
                    "id": 132,
                    "question": "A patient with severe cellulitis requires hospitalization. Empiric therapy should cover the most common causative organisms. Which two bacteria are the most frequent causes of cellulitis?",
                    "choices": [
                      "A. Pseudomonas aeruginosa and Escherichia coli",
                      "B. Staphylococcus aureus and Streptococcus pyogenes",
                      "C. Haemophilus influenzae and Moraxella catarrhalis",
                      "D. Neisseria gonorrhoeae and Chlamydia trachomatis"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Cellulitis is an infection of the deeper dermis and subcutaneous fat. The most common bacterial pathogens responsible for this infection are Streptococcus pyogenes (Group A Strep) and Staphylococcus aureus. Empiric antibiotic choices should provide coverage for both. (Page 35)",
                    "tags": ["Chapter 2", "Cellulitis Treatment", "Basic", "Page 35"]
                  },
                  {
                    "id": 133,
                    "question": "The use of an antiseptic hand rub is an effective method of hand hygiene. For an alcohol-based hand rub to be effective, what is the recommended minimum concentration of alcohol?",
                    "choices": [
                      "A. 20%",
                      "B. 40%",
                      "C. 60%",
                      "D. 95%"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The effectiveness of alcohol-based hand rubs is dependent on the concentration of alcohol. The World Health Organization and the STG recommend that these products contain at least 60% alcohol to be effective germicides. (Page 43)",
                    "tags": ["Chapter 2", "Hand Hygiene", "Basic", "Page 43"]
                  },
                  {
                    "id": 134,
                    "question": "A 70-year-old resident of a nursing home develops pneumonia. This is classified as healthcare-associated pneumonia (HCAP). Why is it important to distinguish HCAP from community-acquired pneumonia (CAP)?",
                    "choices": [
                      "A. HCAP is always less severe than CAP.",
                      "B. HCAP is more likely to be caused by multi-drug resistant (MDR) pathogens.",
                      "C. HCAP is exclusively caused by viruses, whereas CAP is bacterial.",
                      "D. HCAP does not require antibiotic treatment, only supportive care."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Patients in healthcare settings (like nursing homes) are at a higher risk of being colonized or infected with multi-drug resistant bacteria (e.g., MRSA, Pseudomonas). This distinction is critical because it guides the initial empiric antibiotic choice towards broader-spectrum agents that will cover these potential MDR pathogens. (Page 36)",
                    "tags": ["Chapter 2", "HCAP", "Intermediate", "Page 36"]
                  },
                  {
                    "id": 135,
                    "question": "Which of the following is an example of 'contact precautions' in infection control?",
                    "choices": [
                      "A. Placing a patient in a negative pressure isolation room.",
                      "B. Requiring all healthcare workers to wear an N95 respirator when entering the room.",
                      "C. Using dedicated patient-care equipment (e.g., stethoscope) for a single patient.",
                      "D. Keeping the door to the patient's room closed at all times."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Contact precautions are used for patients with infections that can be spread by direct or indirect contact (e.g., MRSA, C. difficile). A key component of these precautions is to use disposable or dedicated patient-care equipment to prevent transmitting pathogens from one patient to another. (Page 44)",
                    "tags": ["Chapter 2", "Infection Control", "Basic", "Page 44"]
                  },
                  {
                    "id": 136,
                    "question": "A 40-year-old man with a non-draining lung abscess is being treated. The physician chooses Clindamycin. What is the rationale for choosing Clindamycin in this setting?",
                    "choices": [
                      "A. It has excellent activity against gram-negative rods like Pseudomonas.",
                      "B. It is the only antibiotic that can penetrate the abscess cavity.",
                      "C. It has excellent activity against anaerobic bacteria, which are common in lung abscesses.",
                      "D. It is less likely to cause side effects compared to other antibiotics."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Lung abscesses are often polymicrobial and typically involve anaerobic bacteria that originate from the oral cavity. Clindamycin is specifically chosen for its excellent spectrum of activity against these anaerobic organisms. (Page 36)",
                    "tags": ["Chapter 2", "Lung Abscess", "Intermediate", "Page 36"]
                  },{
                    "id": 137,
                    "question": "A patient is prescribed an aminoglycoside antibiotic, which exhibits concentration-dependent killing. To optimize the bactericidal effect and minimize toxicity, what is the most appropriate dosing strategy for this class of drug?",
                    "choices": [
                      "A. Administering smaller doses more frequently throughout the day.",
                      "B. Administering the drug as a continuous intravenous infusion.",
                      "C. Administering a single large daily dose to achieve a high peak concentration.",
                      "D. Administering the dose orally with a high-fat meal to increase absorption."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For antibiotics with concentration-dependent killing, the rate and extent of bacterial killing increase with the peak drug concentration. Therefore, administering a single, large daily dose (once-daily dosing) is the preferred strategy to maximize efficacy and leverage the post-antibiotic effect, while also potentially reducing the risk of nephrotoxicity. (Page 34)",
                    "tags": ["Chapter 2", "Pharmacodynamics", "Advanced", "Page 34"]
                  },
                  {
                    "id": 138,
                    "question": "A 45-year-old farmer presents with a one-week history of fever, headache, and abdominal pain. His temperature is 39.5°C and he has splenomegaly. A blood culture is pending, but typhoid fever is highly suspected. According to the STG, which antibiotic is a recommended first-line agent for the treatment of uncomplicated typhoid fever in adults?",
                    "choices": [
                      "A. Amoxicillin",
                      "B. Doxycycline",
                      "C. Ciprofloxacin",
                      "D. Metronidazole"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Fluoroquinolones like Ciprofloxacin have been the mainstay for treating typhoid fever due to their excellent activity against Salmonella Typhi. Although resistance is an increasing concern, it is still listed as a primary option for uncomplicated cases in the STG. (Page 38)",
                    "tags": ["Chapter 2", "Typhoid Fever", "Intermediate", "Page 38"]
                  },
                  {
                    "id": 139,
                    "question": "A critical piece of medical equipment, a surgical laparoscope, cannot withstand high temperatures. Which of the following methods is the most appropriate for sterilizing this heat-sensitive instrument?",
                    "choices": [
                      "A. Autoclaving (steam under pressure)",
                      "B. Boiling in water for 30 minutes",
                      "C. Ethylene oxide gas sterilization",
                      "D. Wiping thoroughly with 70% alcohol"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Sterilization is the complete elimination of all microbial life, including spores. For heat-sensitive items like endoscopes, heat-based methods like autoclaving would cause damage. Ethylene oxide is a low-temperature sterilization method that is effective and safe for such delicate instruments. Wiping with alcohol provides disinfection, not sterilization. (Page 44)",
                    "tags": ["Chapter 2", "Sterilization", "Intermediate", "Page 44"]
                  },
                  {
                    "id": 140,
                    "question": "A patient is started on linezolid for a vancomycin-resistant Enterococcus (VRE) infection. The patient is also taking a selective serotonin reuptake inhibitor (SSRI) for depression. The co-administration of these two drugs poses a significant risk for which of the following adverse events?",
                    "choices": [
                      "A. Acute kidney injury",
                      "B. Serotonin syndrome",
                      "C. Disulfiram-like reaction",
                      "D. Red man syndrome"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Linezolid is a reversible, nonselective inhibitor of monoamine oxidase (MAO). When co-administered with serotonergic agents like SSRIs, it can lead to a potentially life-threatening increase in serotonin levels, causing serotonin syndrome, which is characterized by cognitive, autonomic, and neuromuscular changes. (Page 36)",
                    "tags": ["Chapter 2", "Drug Interactions", "Advanced", "Page 36"]
                  },
                  {
                    "id": 141,
                    "question": "A 10-year-old child suffers a bite from a stray dog. The wound is cleaned and debrided. In addition to tetanus and rabies post-exposure prophylaxis, antibiotic prophylaxis is indicated. Which antibiotic regimen is recommended to cover the typical pathogens found in dog bite wounds?",
                    "choices": [
                      "A. Cephalexin",
                      "B. Clindamycin",
                      "C. Amoxicillin-clavulanate",
                      "D. Trimethoprim-sulfamethoxazole"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Animal bite wounds are polymicrobial, containing aerobes and anaerobes from the animal's oral flora (e.g., Pasteurella, Staphylococcus, Streptococcus, and anaerobes). Amoxicillin-clavulanate provides broad coverage for these likely pathogens and is the recommended first-line agent for prophylaxis. (Page 41)",
                    "tags": ["Chapter 2", "Bite Wound Prophylaxis", "Intermediate", "Page 41"]
                  },
                  {
                    "id": 142,
                    "question": "The most common mechanism of bacterial resistance to penicillin and other beta-lactam antibiotics involves the production of which type of enzyme?",
                    "choices": [
                      "A. DNA gyrase",
                      "B. Acetyltransferase",
                      "C. Beta-lactamase",
                      "D. Dihydrofolate reductase"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The primary mechanism of resistance to beta-lactam antibiotics is the production of beta-lactamase enzymes. These enzymes hydrolyze the beta-lactam ring, which is the core structure of these antibiotics, rendering them inactive. This is a form of enzymatic destruction of the drug. (Page 32)",
                    "tags": ["Chapter 2", "AMR Mechanisms", "Intermediate", "Page 32"]
                  },
                  {
                    "id": 143,
                    "question": "A surgeon performs an elective colectomy, which involves incising the colon. This procedure is classified into which surgical wound category?",
                    "choices": [
                      "A. Clean",
                      "B. Clean-contaminated",
                      "C. Contaminated",
                      "D. Dirty-infected"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "A clean-contaminated case is a surgical procedure in which the respiratory, alimentary, genital, or urinary tracts are entered under controlled conditions and without unusual contamination. Since a colectomy involves a controlled entry into the gastrointestinal tract, it falls into this category, and antibiotic prophylaxis is indicated. (Page 40)",
                    "tags": ["Chapter 2", "Surgical Classification", "Intermediate", "Page 40"]
                  },
                  {
                    "id": 144,
                    "question": "A 30-year-old woman with a history of a severe, non-anaphylactic rash in response to penicillin requires antibiotic prophylaxis for a dental procedure. Which of the following would be an appropriate alternative?",
                    "choices": [
                      "A. Amoxicillin",
                      "B. Cephalexin",
                      "C. Vancomycin",
                      "D. Gentamicin"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "In patients with a penicillin allergy that is not a severe Type I hypersensitivity reaction (anaphylaxis), a first-generation cephalosporin like Cephalexin is often considered a safe and effective alternative for dental prophylaxis. There is a low risk of cross-reactivity. (Page 42)",
                    "tags": ["Chapter 2", "Endocarditis Prophylaxis", "Intermediate", "Page 42"]
                  },
                  {
                    "id": 145,
                    "question": "A patient with no known risk factors for drug-resistant pathogens is admitted with community-acquired pneumonia (CAP) requiring hospitalization on a general medical ward. According to the STG, what is an appropriate empiric antibiotic regimen?",
                    "choices": [
                      "A. Vancomycin plus Piperacillin-tazobactam.",
                      "B. A respiratory fluoroquinolone (e.g., Levofloxacin) alone.",
                      "C. A beta-lactam (e.g., Ceftriaxone) plus a macrolide (e.g., Azithromycin).",
                      "D. Doxycycline alone."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For standard inpatient treatment of CAP, combination therapy is recommended to cover both typical (e.g., Streptococcus pneumoniae) and atypical (e.g., Mycoplasma pneumoniae) pathogens. The combination of a beta-lactam and a macrolide is a standard first-line regimen. (Page 36)",
                    "tags": ["Chapter 2", "CAP Treatment", "Intermediate", "Page 36"]
                  },
                  {
                    "id": 146,
                    "question": "Which of the following interventions is part of the 'droplet precautions' standard for infection control?",
                    "choices": [
                      "A. Keeping the patient in a room with negative air pressure.",
                      "B. Wearing an N95 respirator for all patient interactions.",
                      "C. Wearing a surgical mask when working within 2 meters of the patient.",
                      "D. Ensuring all patient-care items are sterilized after use."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Droplet precautions are used for pathogens transmitted by large respiratory droplets (e.g., influenza, Neisseria meningitidis). These droplets travel short distances. Wearing a surgical mask when in close proximity to the patient is the key intervention to prevent transmission to the healthcare worker. (Page 44)",
                    "tags": ["Chapter 2", "Infection Control", "Basic", "Page 44"]
                  },
                  {
                    "id": 147,
                    "question": "A patient on long-term therapy with a broad-spectrum antibiotic develops oral thrush, a fungal infection caused by Candida albicans. This is an example of what type of adverse drug event?",
                    "choices": [
                      "A. Anaphylactic reaction",
                      "B. Type B (bizarre) adverse reaction",
                      "C. Drug-disease interaction",
                      "D. Superinfection"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "A superinfection is a new infection that appears during the treatment of a primary infection. It occurs because broad-spectrum antibiotics eliminate the normal protective flora, allowing opportunistic pathogens like Candida albicans to proliferate and cause disease. (Page 34)",
                    "tags": ["Chapter 2", "Adverse Effects", "Intermediate", "Page 34"]
                  },
                  {
                    "id": 148,
                    "question": "A physician suspects a patient has brucellosis based on a history of consuming unpasteurized dairy products and presenting with undulating fever and arthralgia. What is the recommended combination therapy for treating human brucellosis?",
                    "choices": [
                      "A. Doxycycline plus Rifampicin for 6 weeks.",
                      "B. Ciprofloxacin plus Metronidazole for 2 weeks.",
                      "C. Amoxicillin plus Clavulanate for 4 weeks.",
                      "D. Ceftriaxone plus Azithromycin for 10 days."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Brucellosis requires prolonged combination therapy to eradicate the intracellular organism and prevent relapse. The standard and most effective regimen recommended by the WHO and in guidelines is a 6-week course of Doxycycline combined with Rifampicin. (Page 39)",
                    "tags": ["Chapter 2", "Brucellosis Treatment", "Advanced", "Page 39"]
                  },
                  {
                    "id": 149,
                    "question": "After administering an injection, a nurse accidentally sustains a needlestick injury from a hollow-bore needle used on a patient with a known high-risk profile. What is the most immediate and critical first aid step?",
                    "choices": [
                      "A. Squeeze the wound to express as much blood as possible.",
                      "B. Immediately report the injury to a supervisor.",
                      "C. Wash the affected area thoroughly with soap and water.",
                      "D. Go to the emergency department to get post-exposure prophylaxis."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "The immediate first aid for a sharps injury is to wash the area well with soap and running water to help mechanically remove any potential pathogens. Squeezing the wound is discouraged as it can cause further tissue trauma. Reporting and seeking medical evaluation should follow immediately after washing. (Page 45)",
                    "tags": ["Chapter 2", "Sharps Injury", "Basic", "Page 45"]
                  },
                  {
                    "id": 150,
                    "question": "A patient is treated for pelvic inflammatory disease (PID). The antibiotic regimen must provide coverage for which two key pathogens?",
                    "choices": [
                      "A. Staphylococcus aureus and Streptococcus pyogenes",
                      "B. Escherichia coli and Klebsiella pneumoniae",
                      "C. Neisseria gonorrhoeae and Chlamydia trachomatis",
                      "D. Bacteroides fragilis and Clostridium perfringens"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Pelvic inflammatory disease is a polymicrobial infection of the upper female genital tract. Empiric treatment must be directed at the most common causative organisms, which are the sexually transmitted pathogens Neisseria gonorrhoeae and Chlamydia trachomatis, in addition to anaerobes. (Page 39)",
                    "tags": ["Chapter 2", "PID Treatment", "Intermediate", "Page 39"]
                  },
                  {
                    "id": 151,
                    "question": "The use of beta-lactam antibiotics, such as penicillins and cephalosporins, is based on time-dependent killing. What does this principle imply for the dosing regimen?",
                    "choices": [
                      "A. The drug is most effective when its concentration is maintained above the MIC for a prolonged period.",
                      "B. A single high peak concentration is more important than the duration of exposure.",
                      "C. The drug should only be given once every 24 hours.",
                      "D. The total dose of the drug is more important than the dosing interval."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For time-dependent antibiotics, the bactericidal effect is related to the duration of time that the drug concentration remains above the minimum inhibitory concentration (MIC) of the pathogen. This means dosing strategies should aim to keep the drug level above the MIC for as much of the dosing interval as possible, often requiring more frequent dosing or continuous infusions. (Page 34)",
                    "tags": ["Chapter 2", "Pharmacodynamics", "Advanced", "Page 34"]
                  },
                  {
                    "id": 152,
                    "question": "A 60-year-old man undergoes a coronary artery bypass graft (CABG) surgery, which includes the placement of prosthetic material. What is the recommended antibiotic for surgical prophylaxis in this situation?",
                    "choices": [
                      "A. Ampicillin",
                      "B. Cefazolin",
                      "C. Vancomycin",
                      "D. Metronidazole"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "For cardiac surgery, especially with implantation of prosthetic material, prophylaxis is directed against common skin flora like Staphylococcus aureus and Staphylococcus epidermidis. A first-generation cephalosporin such as Cefazolin, given within 60 minutes before incision, is the standard of care. (Page 41)",
                    "tags": ["Chapter 2", "Surgical Prophylaxis", "Intermediate", "Page 41"]
                  },
                  {
                    "id": 153,
                    "question": "According to the principles of safe injection practices, what is the correct procedure regarding the use of single-dose vials?",
                    "choices": [
                      "A. They can be used for multiple patients if the remaining medication is stored properly.",
                      "B. They should be used for a single patient and the remainder discarded, even if medication is left over.",
                      "C. The needle can be left in the vial's rubber stopper for repeated use on the same patient.",
                      "D. They can be combined with leftover medication from other vials to make a full dose."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "To prevent cross-contamination and healthcare-associated infections, single-dose vials are intended for use in a single patient for a single procedure. Any leftover medication must be discarded to avoid the risk of contamination and subsequent infection. (Page 45)",
                    "tags": ["Chapter 2", "Safe Injection", "Basic", "Page 45"]
                  },
                  {
                    "id": 154,
                    "question": "A patient is diagnosed with syphilis. What is the drug of choice for treating all stages of syphilis?",
                    "choices": [
                      "A. Doxycycline",
                      "B. Ceftriaxone",
                      "C. Azithromycin",
                      "D. Penicillin G"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Despite its long history of use, Treponema pallidum, the causative agent of syphilis, has remained remarkably sensitive to penicillin. Penicillin G (administered parenterally, with the specific formulation and duration depending on the stage) remains the definitive and preferred treatment for syphilis. (Page 39)",
                    "tags": ["Chapter 2", "Syphilis Treatment", "Basic", "Page 39"]
                  },
                  {
                    "id": 155,
                    "question": "Which of the following is an example of an 'antagonistic' drug interaction?",
                    "choices": [
                      "A. The use of a bacteriostatic agent (like tetracycline) concurrently with a bactericidal agent (like penicillin).",
                      "B. The use of trimethoprim and sulfamethoxazole together to block the folate pathway.",
                      "C. The use of clavulanic acid to protect amoxicillin from enzymatic degradation.",
                      "D. The use of probenecid to increase the serum concentration of penicillin."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Antagonism occurs when the combined effect of two drugs is less than the effect of either drug alone. Bactericidal drugs like penicillin are most effective against rapidly dividing cells. Bacteriostatic drugs like tetracycline inhibit bacterial growth, which can reduce the efficacy of the penicillin, leading to an antagonistic effect. (Page 34)",
                    "tags": ["Chapter 2", "Drug Interactions", "Advanced", "Page 34"]
                  },
                  {
                    "id": 156,
                    "question": "A 25-year-old woman is diagnosed with trichomoniasis. What is the recommended treatment for this sexually transmitted infection?",
                    "choices": [
                      "A. A single oral dose of Metronidazole 2g.",
                      "B. A 7-day course of oral Doxycycline.",
                      "C. A single intramuscular injection of Ceftriaxone.",
                      "D. A 5-day course of oral Acyclovir."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 2: ANTIMICROBIAL RESISTANCE AND ITS CONTAINMENT",
                    "explanation": "Trichomoniasis, caused by the protozoan Trichomonas vaginalis, is effectively treated with a single, large oral dose of Metronidazole (2 grams). It is also important to treat sexual partners simultaneously to prevent reinfection. (Page 39)",
                    "tags": ["Chapter 2", "Trichomoniasis Treatment", "Intermediate", "Page 39"]
                  }, {
                    "id": 157,
                    "question": "A 68-year-old man is admitted to the hospital with pneumonia. He is frail and has limited mobility. According to the Padua Prediction Score for VTE risk assessment mentioned in the STG, which of the following factors would contribute to classifying him as 'high risk'?",
                    "choices": [
                      "A. Age > 60 years",
                      "B. Active cancer within the last 6 months",
                      "C. A recent history of minor surgery",
                      "D. Obesity with a BMI of 28 kg/m²"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The Padua Prediction Score is used to assess the risk of venous thromboembolism (VTE) in hospitalized medical patients. Active cancer is a high-risk factor that scores 3 points. A total score of ≥4 indicates a high risk for VTE. Other high-risk factors include previous VTE, thrombophilic condition, and recent trauma or surgery. (Page 58)",
                    "tags": ["Chapter 3", "VTE Prophylaxis", "Intermediate", "Page 58"]
                  },
                  {
                    "id": 158,
                    "question": "A 55-year-old woman is hospitalized and develops a hospital-acquired fever. Her temperature is 38.5°C. According to the STG, what is the most appropriate initial step in managing this patient's fever?",
                    "choices": [
                      "A. Immediately administer a broad-spectrum antibiotic.",
                      "B. Perform a complete physical examination and review the patient's chart and medications.",
                      "C. Administer paracetamol 1g and wait for the fever to resolve.",
                      "D. Order a cooling blanket to lower the body temperature."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The STG emphasizes that the first step in managing a hospitalized patient with a new fever is a thorough evaluation to determine the cause. This includes a complete physical exam, a review of the clinical course, and checking for any new medications or procedures that could be responsible, before initiating any treatment. (Page 73)",
                    "tags": ["Chapter 3", "Fever Management", "Intermediate", "Page 73"]
                  },
                  {
                    "id": 159,
                    "question": "A 72-year-old male patient with dementia is admitted and becomes agitated and sleepless at night. The physician considers prescribing a hypnotic. Which of the following principles should guide the prescription of hypnotics in elderly patients?",
                    "choices": [
                      "A. Benzodiazepines with long half-lives are preferred.",
                      "B. The lowest effective dose should be used for the shortest possible duration.",
                      "C. Hypnotics should be the first-line treatment for insomnia in the elderly.",
                      "D. The dose should be started high and tapered down as the patient improves."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "In the elderly, hypnotics should be used with extreme caution due to increased risks of confusion, falls, and other adverse effects. The guiding principle is to use the lowest possible dose that is effective and to prescribe it for the shortest duration necessary, while also addressing underlying causes. (Page 79)",
                    "tags": ["Chapter 3", "Insomnia", "Intermediate", "Page 79"]
                  },
                  {
                    "id": 160,
                    "question": "A patient is receiving morphine for severe cancer-related pain. They develop persistent nausea and vomiting. Which area of the brain, stimulated by morphine, is primarily responsible for this emetic side effect?",
                    "choices": [
                      "A. The cerebral cortex",
                      "B. The vestibular apparatus",
                      "C. The chemoreceptor trigger zone (CTZ) in the area postrema",
                      "D. The solitary tract nucleus"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Opioids like morphine are a common cause of nausea and vomiting. They directly stimulate the chemoreceptor trigger zone (CTZ) located in the area postrema of the fourth ventricle, which then signals the vomiting center in the medulla to induce emesis. (Page 75)",
                    "tags": ["Chapter 3", "Nausea and Vomiting", "Advanced", "Page 75"]
                  },
                  {
                    "id": 161,
                    "question": "A nurse is caring for a bed-bound elderly patient and is implementing measures to prevent pressure ulcers. Which of the following is the most critical factor in preventing the development of pressure ulcers?",
                    "choices": [
                      "A. Administering prophylactic antibiotics.",
                      "B. Providing a high-carbohydrate diet.",
                      "C. Frequent repositioning of the patient.",
                      "D. Keeping the patient's skin moist with lotions."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The cornerstone of pressure ulcer prevention is the relief of pressure. For immobile patients, the most important intervention is frequent repositioning (e.g., every 2 hours) to relieve pressure over bony prominences and restore blood flow to the tissues. (Page 64)",
                    "tags": ["Chapter 3", "Pressure Ulcer Prevention", "Basic", "Page 64"]
                  },
                  {
                    "id": 162,
                    "question": "A 40-year-old patient with no underlying kidney or heart disease is NPO (nothing by mouth) after surgery. The physician needs to calculate the patient's daily maintenance fluid requirement. Using the Holliday-Segar method (4/2/1 rule), what is the hourly maintenance fluid rate for a patient weighing 70 kg?",
                    "choices": [
                      "A. 70 mL/hr",
                      "B. 90 mL/hr",
                      "C. 110 mL/hr",
                      "D. 125 mL/hr"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The 4/2/1 rule calculates the hourly maintenance fluid rate: 4 mL/kg/hr for the first 10 kg, 2 mL/kg/hr for the next 10 kg, and 1 mL/kg/hr for the remaining kg. For a 70 kg patient: (4x10) + (2x10) + (1x50) = 40 + 20 + 50 = 110 mL/hr. (Page 57)",
                    "tags": ["Chapter 3", "Fluid Management", "Intermediate", "Page 57"]
                  },
                  {
                    "id": 163,
                    "question": "A patient with terminal cancer is experiencing severe pain and the care team decides to initiate palliative care. What is the primary goal of palliative care?",
                    "choices": [
                      "A. To aggressively treat and cure the underlying disease.",
                      "B. To hasten the end of life to reduce suffering.",
                      "C. To improve the quality of life for patients and their families facing life-threatening illness.",
                      "D. To provide care exclusively in a hospice facility."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Palliative care focuses on providing relief from the symptoms and stress of a serious illness. The main goal is to improve the quality of life for both the patient and their family, regardless of the stage of the disease or the need for other treatments. It is not about curing the disease or hastening death. (Page 80)",
                    "tags": ["Chapter 3", "Palliative Care", "Basic", "Page 80"]
                  },
                  {
                    "id": 164,
                    "question": "A 50-year-old woman with a history of hypertension is being evaluated in an outpatient clinic. The physician is employing the Chronic Care Model to manage her condition. Which element of the Chronic Care Model involves the use of evidence-based guidelines to standardize care?",
                    "choices": [
                      "A. Self-Management Support",
                      "B. Delivery System Design",
                      "C. Decision Support",
                      "D. Clinical Information Systems"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The 'Decision Support' element of the Chronic Care Model focuses on integrating evidence-based guidelines into daily practice. This provides clinicians with the necessary information to make the best decisions for patient care, often through reminders, provider education, and specialist consultation. (Page 52)",
                    "tags": ["Chapter 3", "Chronic Care Model", "Intermediate", "Page 52"]
                  },
                  {
                    "id": 165,
                    "question": "A hospitalized patient is receiving opioids for pain management and develops constipation. Which of the following is the most appropriate initial management strategy for opioid-induced constipation?",
                    "choices": [
                      "A. Immediately stopping the opioid medication.",
                      "B. Advising the patient to increase fiber intake alone.",
                      "C. Initiating a stimulant laxative, with or without a stool softener.",
                      "D. Administering a bulk-forming laxative like psyllium."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Opioid-induced constipation is due to decreased gut motility. Therefore, the most effective treatment is a stimulant laxative (e.g., senna, bisacodyl) to increase motility. Stool softeners may be added. Bulk-forming laxatives should be used with caution as they can cause obstruction if motility is severely reduced. (Page 77)",
                    "tags": ["Chapter 3", "Constipation", "Intermediate", "Page 77"]
                  },
                  {
                    "id": 166,
                    "question": "A physician is communicating with a patient in the outpatient setting. To build rapport and gather accurate information, which type of questioning is most effective to use initially?",
                    "choices": [
                      "A. Leading questions that suggest an answer.",
                      "B. Closed-ended questions requiring a 'yes' or 'no' answer.",
                      "C. Open-ended questions that allow the patient to tell their story.",
                      "D. Multiple questions asked at the same time to save time."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Effective clinical evaluation begins with open-ended questions (e.g., 'What brings you in today?'). This encourages the patient to provide a narrative and express their concerns in their own words, which often yields more comprehensive and accurate information than restrictive, closed-ended questioning. (Page 48)",
                    "tags": ["Chapter 3", "Communication", "Basic", "Page 48"]
                  },
                  {
                    "id": 167,
                    "question": "A 75-year-old woman is admitted for a hip fracture and is placed on VTE prophylaxis. She has severe renal insufficiency (CrCl < 30 mL/min). Which prophylactic agent would require dose adjustment or be contraindicated in this patient?",
                    "choices": [
                      "A. Unfractionated Heparin (UFH)",
                      "B. Enoxaparin (Low Molecular Weight Heparin)",
                      "C. Aspirin",
                      "D. Warfarin"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Low Molecular Weight Heparins (LMWH), such as Enoxaparin, are primarily cleared by the kidneys. In patients with severe renal impairment (CrCl < 30 mL/min), the drug can accumulate, increasing the risk of bleeding. Therefore, dose adjustment is necessary, or an alternative like Unfractionated Heparin (which is cleared by the liver) should be used. (Page 59)",
                    "tags": ["Chapter 3", "VTE Prophylaxis", "Advanced", "Page 59"]
                  },
                  {
                    "id": 168,
                    "question": "Which component of a patient's medical history includes details about their occupation, travel history, and lifestyle habits like smoking and alcohol use?",
                    "choices": [
                      "A. Chief Complaint",
                      "B. History of Present Illness",
                      "C. Past Medical History",
                      "D. Social History"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The Social History is the part of the medical history that captures the patient's personal and social context. This includes their living situation, occupation, diet, exercise, substance use (tobacco, alcohol, illicit drugs), and other lifestyle factors that can impact their health. (Page 49)",
                    "tags": ["Chapter 3", "Clinical Evaluation", "Basic", "Page 49"]
                  },
                  {
                    "id": 169,
                    "question": "A hospitalized patient has a nasogastric (NG) tube placed for feeding. To ensure patient safety and prevent aspiration, what is the most important check before initiating feeding?",
                    "choices": [
                      "A. Ensuring the feed is at room temperature.",
                      "B. Confirming the proper placement of the tube, typically with an x-ray.",
                      "C. Checking the patient's blood glucose level.",
                      "D. Elevating the head of the bed to 15 degrees."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The most critical step before starting enteral feeding is to confirm that the NG tube is correctly positioned in the stomach or small intestine and not in the airway. The gold standard for confirming placement is a chest or abdominal radiograph (x-ray). Auscultation is not reliable. (Page 62)",
                    "tags": ["Chapter 3", "Nutrition", "Intermediate", "Page 62"]
                  },
                  {
                    "id": 170,
                    "question": "An 80-year-old patient with advanced heart failure states, 'I want to be comfortable, but I don't want any machines to keep me alive.' This statement is an example of:",
                    "choices": [
                      "A. A request for euthanasia.",
                      "B. An advance directive.",
                      "C. A durable power of attorney for healthcare.",
                      "D. A living will."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "This is an example of an advance directive, which is a general term for oral or written instructions about future medical care should a patient become unable to communicate their decisions. A living will is a type of written advance directive, but the oral statement itself functions as an advance directive. (Page 83)",
                    "tags": ["Chapter 3", "End of Life Care", "Intermediate", "Page 83"]
                  },
                  {
                    "id": 171,
                    "question": "What is the primary pathophysiologic mechanism that causes pressure ulcers to develop?",
                    "choices": [
                      "A. Bacterial infection of the superficial skin layers.",
                      "B. Allergic reaction to bedding materials.",
                      "C. Tissue ischemia and necrosis from prolonged, unrelieved pressure.",
                      "D. Excessive moisture leading to skin maceration."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Pressure ulcers result from intense and/or prolonged pressure, often combined with shear forces. This external pressure occludes blood and lymphatic capillaries, leading to a lack of oxygen and nutrients (ischemia) and an accumulation of waste products, ultimately causing tissue necrosis and ulcer formation. (Page 63)",
                    "tags": ["Chapter 3", "Pressure Ulcer Prevention", "Intermediate", "Page 63"]
                  },
                  {
                    "id": 172,
                    "question": "A patient is experiencing acute pain after surgery. According to the WHO analgesic ladder, if a patient's pain is not controlled by a non-opioid analgesic like paracetamol, what is the next appropriate step?",
                    "choices": [
                      "A. Add a weak opioid, such as tramadol or codeine.",
                      "B. Immediately start a strong opioid, such as morphine.",
                      "C. Add an adjuvant therapy like an antidepressant.",
                      "D. Switch to a different non-opioid, such as ibuprofen."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The WHO analgesic ladder provides a stepwise approach to pain management. Step 1 is a non-opioid. If pain persists or increases, Step 2 involves adding a weak opioid (like tramadol) to the non-opioid. Strong opioids (Step 3) are reserved for moderate to severe pain that is not controlled by Step 2 medications. (Page 68)",
                    "tags": ["Chapter 3", "Pain Management", "Basic", "Page 68"]
                  },
                  {
                    "id": 173,
                    "question": "A patient develops acute diarrhea in the hospital. Which of the following potential causes is considered a 'red flag' that requires immediate investigation?",
                    "choices": [
                      "A. Watery stools with mild abdominal cramping.",
                      "B. Diarrhea that began after starting a new fiber supplement.",
                      "C. Diarrhea accompanied by severe abdominal pain, fever, and bloody stools.",
                      "D. Loose stools following a dose of a magnesium-containing antacid."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "While many cases of diarrhea in hospitalized patients are benign, the presence of 'red flag' symptoms suggests a more serious underlying cause, such as an infectious colitis (e.g., C. difficile) or an inflammatory process. Severe pain, fever, and hematochezia (bloody stools) warrant prompt and thorough investigation. (Page 78)",
                    "tags": ["Chapter 3", "Diarrhea", "Intermediate", "Page 78"]
                  },
                  {
                    "id": 174,
                    "question": "When assessing a patient's nutritional status, which of the following is an example of an anthropometric measurement?",
                    "choices": [
                      "A. Serum albumin level",
                      "B. Mid-upper arm circumference (MUAC)",
                      "C. Patient's report of their usual dietary intake",
                      "D. The presence of temporal wasting on physical exam"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Anthropometric measurements are measurements of the human body. In nutrition assessment, this includes height, weight, body mass index (BMI), skinfold thickness, and circumferences like the mid-upper arm circumference (MUAC), which help estimate body composition and nutritional status. (Page 60)",
                    "tags": ["Chapter 3", "Nutrition", "Basic", "Page 60"]
                  },
                  {
                    "id": 175,
                    "question": "In the Chronic Care Model, what is the role of the 'Productive Interaction'?",
                    "choices": [
                      "A. To ensure the hospital's electronic health record is functioning correctly.",
                      "B. To link patients with community resources like exercise programs or support groups.",
                      "C. To create a well-functioning relationship between an informed, activated patient and a prepared, proactive practice team.",
                      "D. To organize the practice to be more focused on acute, episodic care."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The central concept of the Chronic Care Model is the 'Productive Interaction'. This occurs when an empowered and informed patient actively collaborates with a well-prepared and proactive healthcare team. This collaborative relationship is key to achieving better health outcomes in chronic disease management. (Page 52)",
                    "tags": ["Chapter 3", "Chronic Care Model", "Advanced", "Page 52"]
                  },
                  {
                    "id": 176,
                    "question": "A 25-year-old patient is admitted with diabetic ketoacidosis and is severely dehydrated. What is the most appropriate initial intravenous fluid for resuscitation?",
                    "choices": [
                      "A. 5% Dextrose in water (D5W)",
                      "B. 0.9% Sodium Chloride (Normal Saline)",
                      "C. 0.45% Sodium Chloride (Half Normal Saline)",
                      "D. 3% Sodium Chloride (Hypertonic Saline)"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "For initial fluid resuscitation in most states of hypovolemia and dehydration, an isotonic crystalloid is the fluid of choice. 0.9% Sodium Chloride (Normal Saline) is an isotonic solution that effectively expands the intravascular volume. D5W is hypotonic once the dextrose is metabolized, and hypertonic saline is reserved for specific situations like severe hyponatremia. (Page 57)",
                    "tags": ["Chapter 3", "Fluid Management", "Intermediate", "Page 57"]
                  },
                  {
                    "id": 177,
                    "question": "A healthcare team is discussing end-of-life care for a patient. The term 'futility' is used. What does medical futility mean in this context?",
                    "choices": [
                      "A. The patient has refused the proposed medical treatment.",
                      "B. The treatment is too expensive for the patient to afford.",
                      "C. The proposed treatment will not achieve its physiological goal or provide a meaningful benefit to the patient.",
                      "D. The treatment has significant side effects that the patient wishes to avoid."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Medical futility refers to an intervention that has no reasonable prospect of benefiting the patient. This can be because the treatment won't work (quantitative futility) or because the outcome is not one the patient would value (qualitative futility). It is an ethical basis for withholding or withdrawing life-sustaining treatment. (Page 84)",
                    "tags": ["Chapter 3", "End of Life Care", "Advanced", "Page 84"]
                  },
                  {
                    "id": 178,
                    "question": "A patient with chemotherapy-induced nausea and vomiting is not responding to a dopamine antagonist like metoclopramide. Which class of medication, which blocks 5-HT3 receptors, would be an appropriate next choice?",
                    "choices": [
                      "A. Phenothiazines (e.g., Prochlorperazine)",
                      "B. Antihistamines (e.g., Diphenhydramine)",
                      "C. Serotonin antagonists (e.g., Ondansetron)",
                      "D. Cannabinoids (e.g., Dronabinol)"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Serotonin (5-HT3) receptor antagonists, such as ondansetron, are highly effective antiemetics, particularly for chemotherapy-induced nausea and vomiting. They work by blocking serotonin receptors in the gastrointestinal tract and the chemoreceptor trigger zone. (Page 75)",
                    "tags": ["Chapter 3", "Nausea and Vomiting", "Intermediate", "Page 75"]
                  },
                  {
                    "id": 179,
                    "question": "When taking a medical history, which section contains a systematic head-to-toe questioning about each body system?",
                    "choices": [
                      "A. History of Present Illness",
                      "B. Review of Systems",
                      "C. Past Medical History",
                      "D. Family History"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The Review of Systems (ROS) is a comprehensive inventory of symptoms within each body system (e.g., cardiovascular, respiratory, gastrointestinal). It is designed to uncover symptoms that were not mentioned in the History of Present Illness but may be relevant to the patient's condition. (Page 49)",
                    "tags": ["Chapter 3", "Clinical Evaluation", "Basic", "Page 49"]
                  },
                  {
                    "id": 180,
                    "question": "Which of the following describes neuropathic pain?",
                    "choices": [
                      "A. Pain arising from actual or threatened damage to non-neural tissue, due to the activation of nociceptors.",
                      "B. Pain caused by a lesion or disease of the somatosensory nervous system.",
                      "C. Pain that is purely psychological with no identifiable physical cause.",
                      "D. Pain originating from internal organs, often described as deep and cramping."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Neuropathic pain is defined as pain that arises as a direct consequence of a lesion or disease affecting the somatosensory system. It is often described with characteristic qualities like burning, shooting, or electric shocks, such as in diabetic neuropathy or post-herpetic neuralgia. (Page 67)",
                    "tags": ["Chapter 3", "Pain Management", "Intermediate", "Page 67"]
                  },
                  {
                    "id": 181,
                    "question": "A 45-year-old man is hospitalized for a severe asthma exacerbation. He requires high-dose systemic corticosteroids. This places him at an increased risk for which of the following complications?",
                    "choices": [
                      "A. Hypoglycemia",
                      "B. Hyperkalemia",
                      "C. Stress-related mucosal damage (Stress Ulcer)",
                      "D. Venous thromboembolism"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "High-dose corticosteroid therapy (defined as >250 mg of hydrocortisone or equivalent per day) is a significant risk factor for developing stress-related mucosal damage, which can lead to gastrointestinal bleeding. Prophylaxis with a proton pump inhibitor or H2 blocker is often considered. (Page 58 - Note: This is linked to VTE risk factors but stress ulcer prophylaxis is a related concept in critically ill patient care discussed broadly)",
                    "tags": ["Chapter 3", "General Hospital Care", "Advanced", "Page 58"]
                  },
                  {
                    "id": 182,
                    "question": "What is the primary purpose of a 'time-out' procedure before a surgery or invasive procedure?",
                    "choices": [
                      "A. To allow the patient a final moment to reconsider the procedure.",
                      "B. To ensure all necessary billing information has been collected.",
                      "C. To conduct a final verification of the correct patient, procedure, site, and available implants.",
                      "D. To allow the surgical team to take a short break before starting."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The 'time-out' is a critical safety check, part of the WHO Surgical Safety Checklist. It is a deliberate pause by the entire team just before the procedure begins to confirm key details: correct patient identity, correct procedure, and correct surgical site. This helps prevent wrong-site, wrong-procedure, and wrong-patient errors. (Page 55)",
                    "tags": ["Chapter 3", "Patient Safety", "Basic", "Page 55"]
                  },
                  {
                    "id": 183,
                    "question": "A patient with terminal illness is suffering from intractable dyspnea (shortness of breath). Which medication is considered a mainstay for the palliative relief of dyspnea?",
                    "choices": [
                      "A. Inhaled albuterol",
                      "B. Oral furosemide",
                      "C. Low-dose oral or parenteral opioids (e.g., morphine)",
                      "D. High-flow oxygen via a non-rebreather mask"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "For the palliative management of dyspnea, particularly in end-of-life care, low-dose systemic opioids are the evidence-based treatment of choice. Morphine is believed to reduce the central perception of breathlessness and decrease respiratory drive, providing significant symptomatic relief. (Page 82)",
                    "tags": ["Chapter 3", "Palliative Care", "Advanced", "Page 82"]
                  },
                  {
                    "id": 184,
                    "question": "In the 'SPIKES' protocol for delivering bad news, what does the 'I' stand for?",
                    "choices": [
                      "A. Information",
                      "B. Intervention",
                      "C. Invitation",
                      "D. Investigation"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "SPIKES is a six-step protocol for delivering difficult news. The 'I' stands for Invitation. This step involves asking the patient how much information they would like to know about their condition. It respects patient autonomy and ensures the clinician shares information at a level the patient is comfortable with. (Page 85)",
                    "tags": ["Chapter 3", "Communication", "Intermediate", "Page 85"]
                  },
                  {
                    "id": 185,
                    "question": "A malnourished patient requires nutritional support, but their gastrointestinal tract is functional. Which method of nutritional support is preferred?",
                    "choices": [
                      "A. Total Parenteral Nutrition (TPN)",
                      "B. Peripheral Parenteral Nutrition (PPN)",
                      "C. Enteral Nutrition (Tube Feeding)",
                      "D. Intravenous hydration with dextrose."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The guiding principle of nutritional support is 'if the gut works, use it.' Enteral nutrition (via NG tube, G-tube, etc.) is preferred over parenteral nutrition whenever the GI tract is functional. It is more physiological, safer (fewer infectious complications), and less expensive. (Page 62)",
                    "tags": ["Chapter 3", "Nutrition", "Intermediate", "Page 62"]
                  },
                  {
                    "id": 186,
                    "question": "A 60-year-old male is admitted with a gastrointestinal bleed. His hemoglobin is 6.5 g/dL. The physician decides to transfuse one unit of packed red blood cells (PRBCs). What is the expected increase in hemoglobin after transfusing one unit of PRBCs?",
                    "choices": [
                      "A. 0.5 g/dL",
                      "B. 1.0 g/dL",
                      "C. 2.0 g/dL",
                      "D. 2.5 g/dL"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "In a stable, non-bleeding adult, the transfusion of one unit of packed red blood cells is expected to raise the hemoglobin level by approximately 1 g/dL and the hematocrit by about 3%. (Page 56)",
                    "tags": ["Chapter 3", "Transfusion", "Intermediate", "Page 56"]
                  },
                  {
                    "id": 187,
                    "question": "A patient is identified as being at high risk for developing pressure ulcers. In addition to frequent repositioning, what is another key intervention to reduce the risk?",
                    "choices": [
                      "A. Using donut-type devices on the heels.",
                      "B. Using a pressure-redistributing support surface (e.g., specialized mattress).",
                      "C. Massaging reddened bony prominences.",
                      "D. Restricting dietary protein to reduce metabolic load."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "For high-risk patients, using a pressure-redistributing surface, such as a high-specification foam mattress or an alternating pressure air mattress, is a crucial intervention. These devices are designed to spread the patient's weight over a larger area, reducing the peak pressure on bony prominences. Donut devices are contraindicated, and massaging reddened areas can cause further tissue damage. (Page 64)",
                    "tags": ["Chapter 3", "Pressure Ulcer Prevention", "Intermediate", "Page 64"]
                  },
                  {
                    "id": 188,
                    "question": "Which of the following pain assessment tools is most appropriate for a 5-year-old child?",
                    "choices": [
                      "A. The Numeric Rating Scale (0-10)",
                      "B. The Verbal Descriptor Scale",
                      "C. The Wong-Baker FACES Pain Rating Scale",
                      "D. The McGill Pain Questionnaire"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The Wong-Baker FACES Pain Rating Scale, which uses a series of faces ranging from a happy face (no hurt) to a crying face (hurts worst), is a self-report tool specifically designed and validated for use in children (typically age 3 and older) to help them communicate their level of pain. (Page 69)",
                    "tags": ["Chapter 3", "Pain Management", "Basic", "Page 69"]
                  },
                  {
                    "id": 189,
                    "question": "An elderly patient with confusion and dehydration is admitted. Her serum sodium is 120 mEq/L. Rapid correction of this chronic hyponatremia can lead to which severe neurological complication?",
                    "choices": [
                      "A. Cerebral edema",
                      "B. Subdural hematoma",
                      "C. Osmotic demyelination syndrome (Central Pontine Myelinolysis)",
                      "D. Wernicke's encephalopathy"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "In chronic hyponatremia, the brain adapts to the low osmotic state. If the sodium level is corrected too quickly, the rapid shift in osmotic pressure can cause water to be pulled out of brain cells, leading to their destruction (demyelination). This condition, known as osmotic demyelination syndrome, can cause severe and often irreversible neurological damage. (Page 57)",
                    "tags": ["Chapter 3", "Electrolyte Imbalance", "Advanced", "Page 57"]
                  },
                  {
                    "id": 190,
                    "question": "According to the STG, what is the recommended first-line pharmacologic treatment for persistent insomnia after non-pharmacologic measures have failed?",
                    "choices": [
                      "A. A long-acting benzodiazepine like Diazepam.",
                      "B. An over-the-counter antihistamine like Diphenhydramine.",
                      "C. A short or intermediate-acting benzodiazepine receptor agonist (e.g., Zolpidem, Zopiclone).",
                      "D. A tricyclic antidepressant like Amitriptyline."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "When medication is necessary for insomnia, the STG recommends starting with a short or intermediate-acting benzodiazepine receptor agonist (sometimes called Z-drugs). These agents are generally preferred over traditional benzodiazepines because they have a better side-effect profile and are less likely to cause next-day sedation or dependence. (Page 79)",
                    "tags": ["Chapter 3", "Insomnia", "Intermediate", "Page 79"]
                  },
                  {
                    "id": 191,
                    "question": "What is the primary role of a 'Do Not Resuscitate' (DNR) order?",
                    "choices": [
                      "A. To stop all medical treatments, including antibiotics and nutrition.",
                      "B. To instruct healthcare providers not to perform cardiopulmonary resuscitation (CPR) if the patient's heart or breathing stops.",
                      "C. To legally authorize a physician to assist in the patient's death.",
                      "D. To transfer the patient to a hospice facility."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "A DNR order is a specific medical order that states that CPR should not be attempted in the event of a cardiac or respiratory arrest. It does not mean that other medical treatments for comfort or symptom management (like pain medication, oxygen, or antibiotics) should be withheld. (Page 84)",
                    "tags": ["Chapter 3", "End of Life Care", "Basic", "Page 84"]
                  },
                  {
                    "id": 192,
                    "question": "A patient with liver failure develops ascites and peripheral edema. This fluid accumulation is primarily caused by a decrease in which of the following pressures?",
                    "choices": [
                      "A. Hydrostatic pressure",
                      "B. Plasma colloid osmotic pressure",
                      "C. Interstitial fluid pressure",
                      "D. Intravascular pressure"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The liver is the primary site of albumin synthesis. In liver failure, albumin levels drop, leading to a decrease in plasma colloid osmotic pressure. This pressure is what normally holds fluid within the blood vessels. When it decreases, fluid leaks out into the interstitial space, causing edema and ascites. (Page 57)",
                    "tags": ["Chapter 3", "Fluid and Electrolytes", "Advanced", "Page 57"]
                  },
                  {
                    "id": 193,
                    "question": "Which of the following is a non-pharmacologic intervention for managing constipation in a hospitalized patient?",
                    "choices": [
                      "A. Administering a daily dose of docusate sodium.",
                      "B. Providing a stimulant laxative like bisacodyl.",
                      "C. Encouraging increased fluid intake and mobility as tolerated.",
                      "D. Prescribing a polyethylene glycol solution."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Non-pharmacologic strategies are the first line of defense against constipation. These include ensuring adequate hydration, increasing dietary fiber (if appropriate), and encouraging physical activity or mobility. These measures help to promote normal bowel function without the use of medications. (Page 77)",
                    "tags": ["Chapter 3", "Constipation", "Basic", "Page 77"]
                  },
                  {
                    "id": 194,
                    "question": "A patient is documented to have a Stage II pressure ulcer. What is the clinical appearance of a Stage II ulcer?",
                    "choices": [
                      "A. Intact skin with non-blanchable redness.",
                      "B. Full-thickness skin loss with visible subcutaneous fat.",
                      "C. Partial-thickness skin loss presenting as a shallow open ulcer or a blister.",
                      "D. Full-thickness tissue loss with exposed bone, tendon, or muscle."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "A Stage II pressure ulcer is defined as partial-thickness loss of the dermis. It presents clinically as a shallow, open ulcer with a red-pink wound bed, without slough. It may also present as an intact or open/ruptured serum-filled blister. (Page 63)",
                    "tags": ["Chapter 3", "Pressure Ulcer Staging", "Intermediate", "Page 63"]
                  },
                  {
                    "id": 195,
                    "question": "A patient is experiencing motion sickness-related nausea. This type of nausea is primarily mediated by which pathway?",
                    "choices": [
                      "A. The chemoreceptor trigger zone (CTZ)",
                      "B. Vagal afferent pathways from the GI tract",
                      "C. The cerebral cortex due to emotional stimuli",
                      "D. The vestibular system"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Motion sickness is caused by a conflict between the signals sent to the brain from the inner ear's vestibular system and the eyes. The vestibular system is the key pathway, and medications that target this area, such as antihistamines (e.g., meclizine) and anticholinergics (e.g., scopolamine), are most effective. (Page 75)",
                    "tags": ["Chapter 3", "Nausea and Vomiting", "Advanced", "Page 75"]
                  },
                  {
                    "id": 196,
                    "question": "In the context of the Chronic Care Model, which element involves creating a patient registry to track and follow-up with patients?",
                    "choices": [
                      "A. Health System Organization",
                      "B. Delivery System Design",
                      "C. Decision Support",
                      "D. Clinical Information Systems"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Clinical Information Systems are essential for high-quality chronic disease care. This involves using registries, which are organized systems to collect data on a population of patients. These registries help provide practice-level feedback, identify patients who need follow-up, and facilitate planned, proactive care. (Page 52)",
                    "tags": ["Chapter 3", "Chronic Care Model", "Intermediate", "Page 52"]
                  },
                  {
                    "id": 197,
                    "question": "What is the primary objective of a debriefing session for healthcare professionals after the death of a patient?",
                    "choices": [
                      "A. To assign blame for any medical errors that may have occurred.",
                      "B. To provide emotional support to the staff and identify areas for improvement in care.",
                      "C. To complete the death certificate and other required paperwork.",
                      "D. To inform the family of the details of the patient's final moments."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Debriefing after a patient's death is a supportive process for the healthcare team. Its goals are to allow staff to process the emotional impact of the event, share perspectives on what happened, identify what went well, and discuss what could be improved in the future. It is a tool for learning and emotional support, not for assigning blame. (Page 86)",
                    "tags": ["Chapter 3", "End of Life Care", "Intermediate", "Page 86"]
                  },
                  {
                    "id": 198,
                    "question": "A 50-year-old man presents to the outpatient clinic for a routine check-up. As part of the clinical evaluation, the physician asks, 'Have you had any thoughts of harming yourself or others?' This question is part of which component of the evaluation?",
                    "choices": [
                      "A. Review of Systems",
                      "B. Social History",
                      "C. Psychiatric Screening",
                      "D. Past Medical History"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Screening for depression, anxiety, and suicidal ideation is a crucial part of a comprehensive clinical evaluation, especially in primary care. Directly asking about thoughts of self-harm is a key component of a psychiatric screening and safety assessment. (Page 50)",
                    "tags": ["Chapter 3", "Clinical Evaluation", "Basic", "Page 50"]
                  },
                  {
                    "id": 199,
                    "question": "Which of the following is a key advantage of using Unfractionated Heparin (UFH) over Low Molecular Weight Heparin (LMWH) for VTE prophylaxis?",
                    "choices": [
                      "A. It has a longer half-life, allowing for once-daily dosing.",
                      "B. It does not require laboratory monitoring.",
                      "C. It has a lower risk of causing heparin-induced thrombocytopenia (HIT).",
                      "D. It has a short half-life and its effect can be rapidly reversed with protamine sulfate."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Unfractionated Heparin has a very short half-life (around 60-90 minutes). This is advantageous in patients who are at high risk of bleeding or who may need an urgent surgical procedure, as its anticoagulant effect dissipates quickly after being stopped and can be fully reversed with protamine sulfate. (Page 59)",
                    "tags": ["Chapter 3", "VTE Prophylaxis", "Advanced", "Page 59"]
                  },
                  {
                    "id": 200,
                    "question": "A patient with advanced dementia is no longer able to eat or drink. The family is considering the placement of a percutaneous endoscopic gastrostomy (PEG) tube for long-term feeding. What does evidence suggest about the use of PEG tubes in this patient population?",
                    "choices": [
                      "A. They significantly prolong survival and improve quality of life.",
                      "B. They have been shown to not prolong life or improve quality of life and may increase burdens.",
                      "C. They prevent aspiration pneumonia.",
                      "D. They are the recommended standard of care for all patients with advanced dementia."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Multiple studies have shown that in patients with advanced dementia, tube feeding (via PEG tube) does not improve survival, prevent aspiration pneumonia, reduce the risk of pressure ulcers, or improve quality of life. The focus of care should be on comfort, and careful hand feeding is often the preferred approach. (Page 62)",
                    "tags": ["Chapter 3", "Nutrition", "Advanced", "Page 62"]
                  },
                  {
                    "id": 201,
                    "question": "A patient is taking a non-steroidal anti-inflammatory drug (NSAID) for pain and is experiencing dyspepsia. An NSAID-induced ulcer is suspected. What is the primary mechanism by which NSAIDs cause gastric mucosal injury?",
                    "choices": [
                      "A. They directly increase gastric acid secretion.",
                      "B. They inhibit the production of protective prostaglandins in the gastric mucosa.",
                      "C. They eradicate Helicobacter pylori from the stomach.",
                      "D. They delay gastric emptying, leading to food stasis."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "NSAIDs work by inhibiting cyclooxygenase (COX) enzymes. The inhibition of COX-1 reduces the synthesis of prostaglandins, which are vital for maintaining the protective mucosal barrier of the stomach (by stimulating mucus and bicarbonate secretion and maintaining mucosal blood flow). This disruption is the main cause of NSAID-induced gastropathy. (Page 68)",
                    "tags": ["Chapter 3", "Pain Management", "Advanced", "Page 68"]
                  },
                  {
                    "id": 202,
                    "question": "In the SPIKES protocol for delivering bad news, what is the purpose of the 'K' step (Knowledge)?",
                    "choices": [
                      "A. To ask the patient what they already know or suspect about their medical situation.",
                      "B. To provide the medical knowledge and information in a clear, simple way.",
                      "C. To keep the news from the family until the patient gives permission.",
                      "D. To acknowledge the patient's emotional response to the news."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "The 'K' in SPIKES stands for Knowledge. Before you tell, ask. This step involves assessing the patient's understanding of their situation by asking questions like, 'What have you been told so far about your illness?' This allows the clinician to gauge the patient's level of understanding and correct any misinformation before delivering the new information. (Page 85)",
                    "tags": ["Chapter 3", "Communication", "Intermediate", "Page 85"]
                  },
                  {
                    "id": 203,
                    "question": "A 70-year-old patient is found to have asymptomatic bacteriuria on a routine urinalysis. The patient has no urinary symptoms and is not pregnant. What is the appropriate management?",
                    "choices": [
                      "A. Treat with a 7-day course of antibiotics.",
                      "B. Treat with a 3-day course of antibiotics.",
                      "C. Withhold antibiotic treatment.",
                      "D. Obtain a urine culture and treat based on sensitivities."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Screening for and treating asymptomatic bacteriuria is generally not recommended in most populations, including non-pregnant adults and the elderly. Treatment does not improve outcomes and contributes to antimicrobial resistance. The main exceptions are pregnant women and patients about to undergo a urologic procedure. (Page 74)",
                    "tags": ["Chapter 3", "Fever Management", "Intermediate", "Page 74"]
                  },
                  {
                    "id": 204,
                    "question": "Which of the following is a component of 'Self-Management Support' in the Chronic Care Model?",
                    "choices": [
                      "A. Using a patient registry to send reminders for appointments.",
                      "B. Providing clinicians with evidence-based guidelines.",
                      "C. Redefining the roles of the healthcare team to be more proactive.",
                      "D. Using collaborative goal setting and providing tools to help patients manage their own health."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Self-Management Support focuses on empowering and preparing patients to manage their health and healthcare. This involves more than just giving information; it includes collaborative problem-solving, goal setting, and providing patients with the skills and confidence to handle their chronic conditions on a day-to-day basis. (Page 52)",
                    "tags": ["Chapter 3", "Chronic Care Model", "Intermediate", "Page 52"]
                  },
                  {
                    "id": 205,
                    "question": "When communicating with a patient about their goals of care at the end of life, what is the most appropriate approach?",
                    "choices": [
                      "A. Making decisions for the patient to relieve them of the burden.",
                      "B. Focusing the conversation solely on available medical treatments.",
                      "C. Exploring the patient's values, fears, and what is most important to them.",
                      "D. Waiting until the patient is in the terminal phase to initiate the conversation."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Effective end-of-life care discussions are centered on the patient's values and preferences. The goal is to understand what gives the patient's life meaning, what their fears are, and what trade-offs they are willing to make. This allows medical decisions to be aligned with what is most important to the patient as a person. (Page 84)",
                    "tags": ["Chapter 3", "End of Life Care", "Intermediate", "Page 84"]
                  },
                  {
                    "id": 206,
                    "question": "A patient requires long-term (e.g., several weeks) parenteral nutrition. Which route of administration is preferred to avoid complications?",
                    "choices": [
                      "A. A peripheral intravenous line in the hand.",
                      "B. A central venous catheter (e.g., PICC line, subclavian line).",
                      "C. An intraosseous line.",
                      "D. A nasogastric tube."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 3: CARE OF PATIENTS IN AMBULATORY AND HOSPITALIZED SETTING",
                    "explanation": "Total Parenteral Nutrition (TPN) solutions are hyperosmolar and can cause thrombophlebitis if infused through a peripheral vein for an extended period. For long-term parenteral nutrition, a central venous catheter is required. The large volume and rapid blood flow in a central vein (like the superior vena cava) quickly dilutes the TPN solution, minimizing endothelial damage. (Page 62)",
                    "tags": ["Chapter 3", "Nutrition", "Intermediate", "Page 62"]
                  }, {
                    "id": 207,
                    "question": "A 65-year-old man presents to the emergency department with palpitations and shortness of breath. His ECG shows a heart rate of 140 bpm, an irregularly irregular rhythm, and no discernible P waves. He is hemodynamically stable. According to the STG, which of the following is the most appropriate initial agent for rate control?",
                    "choices": [
                      "A. Adenosine",
                      "B. Metoprolol",
                      "C. Amiodarone",
                      "D. Atropine"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "The ECG findings are characteristic of atrial fibrillation with a rapid ventricular response. For a hemodynamically stable patient, the primary goal is rate control. The STG recommends beta-blockers (like Metoprolol) or non-dihydropyridine calcium channel blockers as first-line agents. Adenosine is for SVT, Amiodarone is more for rhythm control, and Atropine is for bradycardia. (Page 88)",
                    "tags": ["Chapter 4", "Atrial Fibrillation", "Intermediate", "Page 88"]
                  },
                  {
                    "id": 208,
                    "question": "A 30-year-old woman presents with a sudden onset of rapid, regular palpitations. Her ECG shows a narrow complex tachycardia at a rate of 180 bpm. She is alert, with a blood pressure of 110/70 mmHg. After an unsuccessful trial of carotid sinus massage, what is the recommended first-line pharmacologic treatment?",
                    "choices": [
                      "A. Verapamil 5 mg IV",
                      "B. Adenosine 6 mg rapid IV push",
                      "C. Diltiazem 10 mg IV",
                      "D. Synchronized cardioversion at 50J"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "This presentation is typical of a stable supraventricular tachycardia (SVT). After vagal maneuvers fail, the drug of choice is Adenosine, administered as a rapid IV push due to its extremely short half-life. Verapamil is a second-line option. Synchronized cardioversion is reserved for unstable patients. (Page 91)",
                    "tags": ["Chapter 4", "SVT", "Intermediate", "Page 91"]
                  },
                  {
                    "id": 209,
                    "question": "A 70-year-old man with a history of ischemic heart disease is found to have a regular, wide complex tachycardia at a rate of 160 bpm on his ECG. He is conscious and talking, with a blood pressure of 95/60 mmHg. What is the most appropriate next step in management?",
                    "choices": [
                      "A. Administer IV Verapamil",
                      "B. Perform immediate unsynchronized defibrillation",
                      "C. Administer IV Amiodarone",
                      "D. Administer IV Adenosine"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "A wide complex tachycardia in a patient with structural heart disease should be treated as ventricular tachycardia (VT) until proven otherwise. For a stable patient with a pulse, the STG recommends antiarrhythmic infusion, with Amiodarone being the primary agent. Verapamil is contraindicated as it can cause hemodynamic collapse. Defibrillation is for pulseless VT, and Adenosine is for narrow complex tachycardia. (Page 92)",
                    "tags": ["Chapter 4", "Ventricular Tachycardia", "Advanced", "Page 92"]
                  },
                  {
                    "id": 210,
                    "question": "A 58-year-old woman is brought to the emergency room feeling dizzy and weak. Her ECG shows a third-degree (complete) heart block with a ventricular escape rhythm at 35 bpm. Her blood pressure is 80/50 mmHg. What is the initial drug of choice for this symptomatic bradycardia?",
                    "choices": [
                      "A. Isoproterenol",
                      "B. Dopamine",
                      "C. Atropine",
                      "D. Epinephrine"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "For a patient with symptomatic bradycardia due to AV block, Atropine is the first-line medication. It works by blocking parasympathetic influence on the heart, thereby increasing the heart rate. If Atropine is ineffective, other agents like dopamine or epinephrine, or transcutaneous pacing may be considered. (Page 94)",
                    "tags": ["Chapter 4", "Bradycardia", "Intermediate", "Page 94"]
                  },
                  {
                    "id": 211,
                    "question": "A 75-year-old male with non-valvular atrial fibrillation has a CHA₂DS₂-VASc score of 4. He is being started on long-term anticoagulation to prevent stroke. According to the STG, which of the following is the recommended oral anticoagulant for this purpose?",
                    "choices": [
                      "A. Aspirin",
                      "B. Clopidogrel",
                      "C. Warfarin",
                      "D. Heparin"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "For patients with atrial fibrillation and a high risk of stroke (CHA₂DS₂-VASc score of 2 or greater), oral anticoagulation is indicated. The STG specifies Warfarin for this purpose, with a target INR of 2.0-3.0. Aspirin is not sufficient for this level of risk. Heparin is used for initial parenteral anticoagulation, not long-term oral therapy. (Page 89)",
                    "tags": ["Chapter 4", "Atrial Fibrillation", "Intermediate", "Page 89"]
                  },
                  {
                    "id": 212,
                    "question": "A 45-year-old man presents with palpitations. His ECG shows a regular, narrow complex tachycardia. While preparing to administer Adenosine, the patient becomes pale, hypotensive (BP 70/40 mmHg), and confused. What is the most appropriate immediate intervention?",
                    "choices": [
                      "A. Administer a fluid bolus of 1L Normal Saline.",
                      "B. Perform immediate synchronized cardioversion.",
                      "C. Administer Amiodarone 150 mg IV over 10 minutes.",
                      "D. Double the dose of Adenosine to 12 mg and administer."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "The patient has SVT with signs of hemodynamic instability (hypotension, altered mental status). In this situation, the treatment of choice is immediate synchronized electrical cardioversion to restore sinus rhythm promptly. Pharmacologic agents are not the first choice for unstable tachyarrhythmias. (Page 91)",
                    "tags": ["Chapter 4", "SVT", "Advanced", "Page 91"]
                  },
                  {
                    "id": 213,
                    "question": "A patient is found unresponsive, pulseless, and in ventricular fibrillation (VF) on the cardiac monitor. According to ACLS protocols referenced in the STG, what is the first and most critical intervention?",
                    "choices": [
                      "A. Intravenous administration of Epinephrine.",
                      "B. Immediate high-quality CPR.",
                      "C. Intubation and mechanical ventilation.",
                      "D. Immediate unsynchronized defibrillation."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "For pulseless ventricular tachycardia or ventricular fibrillation, the most important and life-saving intervention is immediate defibrillation (an unsynchronized shock). This is the only intervention that can terminate the lethal arrhythmia. CPR should be performed while the defibrillator is being prepared and between shocks, and medications like Epinephrine are given subsequently. (Page 93)",
                    "tags": ["Chapter 4", "Ventricular Fibrillation", "Intermediate", "Page 93"]
                  },
                  {
                    "id": 214,
                    "question": "Which of the following ECG characteristics is the hallmark of atrial fibrillation?",
                    "choices": [
                      "A. A regular rhythm with a sawtooth pattern of P waves.",
                      "B. A progressively lengthening PR interval followed by a dropped QRS complex.",
                      "C. The absence of P waves and an irregularly irregular R-R interval.",
                      "D. A wide QRS complex with a rate greater than 100 bpm."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "The defining features of atrial fibrillation on an ECG are the complete absence of coordinated atrial activity, which results in the lack of discernible P waves, and an irregularly irregular ventricular response, seen as varying R-R intervals. (Page 87)",
                    "tags": ["Chapter 4", "Atrial Fibrillation", "Basic", "Page 87"]
                  },
                  {
                    "id": 215,
                    "question": "A 68-year-old female with known severe heart failure (EF 25%) presents with atrial fibrillation and a heart rate of 130 bpm. She is hemodynamically stable. Which medication is preferred for rate control in this specific clinical context?",
                    "choices": [
                      "A. Verapamil",
                      "B. Diltiazem",
                      "C. Metoprolol",
                      "D. Digoxin"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "In patients with atrial fibrillation and severe heart failure (decompensated or low ejection fraction), non-dihydropyridine calcium channel blockers like verapamil and diltiazem are contraindicated due to their negative inotropic effects. While beta-blockers can be used cautiously, Digoxin is often preferred in this setting as it controls the heart rate without causing significant negative inotropy. (Page 88)",
                    "tags": ["Chapter 4", "Atrial Fibrillation", "Advanced", "Page 88"]
                  },
                  {
                    "id": 216,
                    "question": "Adenosine is administered to a patient with SVT. What is the mechanism of action by which Adenosine terminates the arrhythmia?",
                    "choices": [
                      "A. It blocks beta-adrenergic receptors in the heart.",
                      "B. It blocks sodium channels, slowing conduction.",
                      "C. It blocks calcium channels, decreasing contractility.",
                      "D. It slows conduction through the AV node by activating potassium channels."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "Adenosine works by binding to A1 receptors in the AV node. This activates potassium channels, causing hyperpolarization and markedly slowing or transiently blocking AV nodal conduction. This action interrupts the re-entrant circuit that is responsible for most cases of SVT. (Page 91)",
                    "tags": ["Chapter 4", "SVT", "Advanced", "Page 91"]
                  },
                  {
                    "id": 217,
                    "question": "A patient in pulseless ventricular tachycardia has received two defibrillation shocks and a dose of epinephrine. The rhythm persists. What is the next antiarrhythmic drug to be administered according to ACLS guidelines?",
                    "choices": [
                      "A. Lidocaine",
                      "B. Amiodarone",
                      "C. Magnesium Sulfate",
                      "D. Procainamide"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "In refractory VF or pulseless VT (persisting after shocks and epinephrine), an antiarrhythmic drug should be considered. Amiodarone (300 mg IV push) is the first-line antiarrhythmic recommended in this setting. Lidocaine is an alternative if Amiodarone is unavailable. (Page 93)",
                    "tags": ["Chapter 4", "Ventricular Tachycardia", "Intermediate", "Page 93"]
                  },
                  {
                    "id": 218,
                    "question": "A 77-year-old man presents with lightheadedness. His ECG shows a heart rate of 40 bpm, a constant PR interval, and a consistent 2:1 ratio of P waves to QRS complexes. What is the most likely diagnosis?",
                    "choices": [
                      "A. First-degree AV block",
                      "B. Mobitz Type I (Wenckebach) second-degree AV block",
                      "C. Mobitz Type II second-degree AV block",
                      "D. Third-degree (complete) AV block"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "Mobitz Type II second-degree AV block is characterized by intermittently non-conducted P waves (dropped QRS complexes) that are not preceded by progressive PR interval prolongation. The PR interval of the conducted beats is constant. A 2:1 block, where every other P wave is blocked, is a common presentation. (Page 94)",
                    "tags": ["Chapter 4", "Bradycardia", "Advanced", "Page 94"]
                  },
                  {
                    "id": 219,
                    "question": "What is the primary reason for administering anticoagulation to patients with atrial fibrillation?",
                    "choices": [
                      "A. To prevent the formation of coronary artery thrombus.",
                      "B. To reduce the risk of deep vein thrombosis.",
                      "C. To prevent the formation of a left atrial appendage thrombus and subsequent stroke.",
                      "D. To facilitate spontaneous conversion to sinus rhythm."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "In atrial fibrillation, the chaotic atrial contractions lead to blood stasis, particularly in the left atrial appendage. This promotes the formation of a thrombus (blood clot). If this clot dislodges and travels to the brain, it can cause an ischemic stroke. Anticoagulation is highly effective in preventing this complication. (Page 89)",
                    "tags": ["Chapter 4", "Atrial Fibrillation", "Basic", "Page 89"]
                  },
                  {
                    "id": 220,
                    "question": "A patient with stable ventricular tachycardia is being treated with an IV Amiodarone infusion. Which of the following is a potential major adverse effect of intravenous Amiodarone that requires close monitoring?",
                    "choices": [
                      "A. Hypertension",
                      "B. Hyperglycemia",
                      "C. Hypotension",
                      "D. Hypokalemia"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "A primary adverse effect of intravenous amiodarone is hypotension. This can be due to its vasodilatory effects. Blood pressure must be monitored closely during and after the infusion, and the infusion rate may need to be slowed if significant hypotension occurs. (Page 92)",
                    "tags": ["Chapter 4", "Ventricular Tachycardia", "Intermediate", "Page 92"]
                  },
                  {
                    "id": 221,
                    "question": "An 80-year-old man is evaluated for falls. His resting ECG is normal, but a 24-hour Holter monitor reveals several episodes of sinus arrest lasting 3-4 seconds, corresponding with his symptoms of dizziness. This condition is best described as:",
                    "choices": [
                      "A. Atrial fibrillation",
                      "B. Sick sinus syndrome",
                      "C. Complete heart block",
                      "D. Vasovagal syncope"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "Sick sinus syndrome (SSS), or sinus node dysfunction, is a generalized abnormality of sinus impulse formation and propagation. It can manifest as persistent sinus bradycardia, sinus arrest (prolonged pauses), or alternating periods of bradycardia and tachycardia (tachy-brady syndrome). Symptomatic pauses are a classic feature. (Page 94)",
                    "tags": ["Chapter 4", "Bradycardia", "Advanced", "Page 94"]
                  },
                  {
                    "id": 222,
                    "question": "If the initial 6 mg dose of Adenosine is ineffective for terminating SVT in a stable patient, what is the next recommended step?",
                    "choices": [
                      "A. Administer a 6 mg dose of Verapamil.",
                      "B. Administer a 12 mg dose of Adenosine.",
                      "C. Proceed directly to synchronized cardioversion.",
                      "D. Start an Amiodarone infusion."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "The standard protocol for Adenosine administration involves an initial 6 mg rapid IV push. If this is not effective within 1-2 minutes, a second, larger dose of 12 mg should be administered. This is due to the drug's very short half-life, where a larger dose may be needed to achieve a therapeutic effect at the AV node. (Page 91)",
                    "tags": ["Chapter 4", "SVT", "Basic", "Page 91"]
                  },
                  {
                    "id": 223,
                    "question": "Which of the following classes of drugs is generally contraindicated in patients who have atrial fibrillation in the setting of Wolff-Parkinson-White (WPW) syndrome?",
                    "choices": [
                      "A. Beta-blockers",
                      "B. AV nodal blocking agents (e.g., Verapamil, Diltiazem, Digoxin)",
                      "C. Class III antiarrhythmics (e.g., Amiodarone)",
                      "D. Class IC antiarrhythmics (e.g., Procainamide)"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "In a patient with WPW, there is an accessory pathway that bypasses the AV node. If the patient develops atrial fibrillation, using an AV nodal blocking agent will block the normal conduction pathway, potentially leading to preferential and very rapid conduction down the accessory pathway. This can precipitate ventricular fibrillation and should be avoided. (Page 90)",
                    "tags": ["Chapter 4", "Atrial Fibrillation", "Advanced", "Page 90"]
                  },
                  {
                    "id": 224,
                    "question": "A patient is started on warfarin for atrial fibrillation. What is the primary laboratory test used to monitor the therapeutic effect of warfarin?",
                    "choices": [
                      "A. Activated partial thromboplastin time (aPTT)",
                      "B. Platelet count",
                      "C. Hemoglobin and Hematocrit",
                      "D. International Normalized Ratio (INR)"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "The anticoagulant effect of warfarin is monitored by measuring the prothrombin time (PT), which is standardized as the International Normalized Ratio (INR). The goal is to maintain the INR within a specific therapeutic range (typically 2.0-3.0 for atrial fibrillation) to ensure efficacy while minimizing bleeding risk. (Page 89)",
                    "tags": ["Chapter 4", "Atrial Fibrillation", "Basic", "Page 89"]
                  },
                  {
                    "id": 225,
                    "question": "A patient with symptomatic bradycardia does not respond to a maximum dose of Atropine. The patient remains hypotensive. What is the next recommended intervention while awaiting transcutaneous pacing or a more definitive treatment?",
                    "choices": [
                      "A. Administer a beta-blocker.",
                      "B. Administer an IV infusion of a vasopressor like Dopamine or Epinephrine.",
                      "C. Administer a fluid challenge of 500 mL Normal Saline.",
                      "D. Administer IV Magnesium Sulfate."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "If atropine is ineffective for symptomatic bradycardia, the next step is to consider transcutaneous pacing or a chronotropic drug infusion. Dopamine or epinephrine infusions are recommended to increase heart rate and blood pressure while a more definitive therapy, like a pacemaker, is being arranged. (Page 94)",
                    "tags": ["Chapter 4", "Bradycardia", "Intermediate", "Page 94"]
                  },
                  {
                    "id": 226,
                    "question": "The term 'rate control' in the management of atrial fibrillation refers to:",
                    "choices": [
                      "A. The strategy of converting the heart back to a normal sinus rhythm.",
                      "B. The strategy of using medications to slow the rapid ventricular response.",
                      "C. The strategy of using anticoagulants to control the rate of clot formation.",
                      "D. The strategy of controlling the rate of progression of underlying heart disease."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.1. ARRHYTHMIAS",
                    "explanation": "Rate control is a primary management strategy for atrial fibrillation. It does not aim to restore sinus rhythm but instead focuses on using medications (like beta-blockers, calcium channel blockers, or digoxin) to slow down the conduction of impulses through the AV node, thereby controlling the heart rate and improving symptoms. (Page 88)",
                    "tags": ["Chapter 4", "Atrial Fibrillation", "Basic", "Page 88"]
                  },  {
                    "id": 227,
                    "question": "A 65-year-old male with a history of myocardial infarction presents with progressive dyspnea on exertion, orthopnea, and bilateral lower limb edema. Which combination of drugs forms the cornerstone of long-term therapy to improve survival in this patient with HFrEF?",
                    "choices": [
                      "A. Furosemide, Digoxin, and Aspirin",
                      "B. An ACE inhibitor, a Beta-Blocker, and an Aldosterone Antagonist",
                      "C. A Calcium Channel Blocker, a Statin, and Nitrates",
                      "D. An ARB, Hydralazine, and Furosemide"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "For the long-term management of heart failure with reduced ejection fraction (HFrEF), the STG emphasizes the use of medications that improve survival. The foundational therapy consists of an ACE inhibitor (or ARB), a beta-blocker, and for many patients, an aldosterone antagonist (like Spironolactone). These drugs modify the neurohormonal activation that drives the progression of heart failure. (Page 97)",
                    "tags": ["Chapter 4", "Heart Failure", "Intermediate", "Page 97"]
                  },
                  {
                    "id": 228,
                    "question": "A 70-year-old woman is admitted with acute decompensated heart failure. She is found to be fluid overloaded, with pulmonary rales and peripheral edema. According to the STG, what is the initial pharmacologic agent of choice to relieve her congestive symptoms?",
                    "choices": [
                      "A. Intravenous Nitroglycerin",
                      "B. Intravenous Dobutamine",
                      "C. An oral ACE inhibitor",
                      "D. An intravenous loop diuretic, such as Furosemide"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "In patients with acute decompensated heart failure and evidence of fluid overload (congestion), the first-line treatment is an intravenous loop diuretic. Furosemide is the most commonly used agent. It promotes rapid diuresis, which reduces preload, alleviates pulmonary congestion, and improves symptoms. (Page 101)",
                    "tags": ["Chapter 4", "Heart Failure", "Intermediate", "Page 101"]
                  },
                  {
                    "id": 229,
                    "question": "A patient with stable chronic HFrEF is being initiated on a beta-blocker. Which of the following is a key principle for starting beta-blocker therapy in heart failure?",
                    "choices": [
                      "A. Start with a high dose to achieve rapid heart rate control.",
                      "B. Use a beta-blocker with intrinsic sympathomimetic activity.",
                      "C. Start with a very low dose and titrate slowly upwards as tolerated.",
                      "D. Temporarily discontinue the patient's ACE inhibitor."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "Beta-blocker therapy in heart failure must be initiated carefully. The principle is 'start low, go slow.' A very small dose of an evidence-based beta-blocker (e.g., Metoprolol Succinate, Carvedilol) should be started, and the dose should be doubled every 2-4 weeks, as tolerated, until the target dose is reached. This approach minimizes the risk of worsening heart failure due to the initial negative inotropic effects. (Page 98)",
                    "tags": ["Chapter 4", "Heart Failure", "Intermediate", "Page 98"]
                  },
                  {
                    "id": 230,
                    "question": "An 80-year-old man with HFrEF and atrial fibrillation is taking digoxin. He presents with nausea, vomiting, and visual disturbances (yellow halos). His heart rate is 50 bpm. What is the most likely diagnosis?",
                    "choices": [
                      "A. Worsening heart failure",
                      "B. Digoxin toxicity",
                      "C. Acute cholecystitis",
                      "D. Uremia"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "The patient's symptoms—gastrointestinal distress (nausea, vomiting), visual changes, and bradycardia—are classic signs of digoxin toxicity. Elderly patients and those with renal impairment are at particularly high risk. The therapeutic window for digoxin is narrow. (Page 100)",
                    "tags": ["Chapter 4", "Heart Failure", "Intermediate", "Page 100"]
                  },
                  {
                    "id": 231,
                    "question": "What is the primary mechanism of action of ACE inhibitors (e.g., Enalapril) in the treatment of heart failure?",
                    "choices": [
                      "A. They directly increase cardiac contractility (positive inotropy).",
                      "B. They block the conversion of angiotensin I to angiotensin II, leading to vasodilation and reduced aldosterone.",
                      "C. They block beta-adrenergic receptors to slow the heart rate.",
                      "D. They act as potent diuretics to reduce fluid volume."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "ACE inhibitors block the renin-angiotensin-aldosterone system (RAAS). By inhibiting the conversion of angiotensin I to the potent vasoconstrictor angiotensin II, they cause vasodilation (reducing afterload), decrease sodium and water retention (by reducing aldosterone secretion, thus reducing preload), and prevent adverse cardiac remodeling. (Page 97)",
                    "tags": ["Chapter 4", "Heart Failure", "Basic", "Page 97"]
                  },
                  {
                    "id": 232,
                    "question": "A patient is admitted with acute cardiogenic pulmonary edema, presenting with severe dyspnea, frothy pink sputum, and diaphoresis. Besides oxygen and diuretics, which medication can provide rapid preload and afterload reduction, thereby alleviating pulmonary congestion?",
                    "choices": [
                      "A. Intravenous Metoprolol",
                      "B. Intravenous Nitroglycerin",
                      "C. Intravenous Calcium Gluconate",
                      "D. Oral Spironolactone"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "In acute pulmonary edema, especially with associated hypertension, intravenous vasodilators are crucial. Nitroglycerin is a potent venodilator at lower doses, which reduces preload and pulmonary venous pressure. At higher doses, it also has arterial vasodilatory effects, reducing afterload. This provides rapid symptom relief. (Page 101)",
                    "tags": ["Chapter 4", "Heart Failure", "Advanced", "Page 101"]
                  },
                  {
                    "id": 233,
                    "question": "A patient with heart failure is prescribed spironolactone. What is the most important laboratory parameter to monitor in a patient taking this medication?",
                    "choices": [
                      "A. Serum sodium",
                      "B. Serum calcium",
                      "C. Serum potassium",
                      "D. Serum magnesium"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "Spironolactone is an aldosterone antagonist, which means it is a potassium-sparing diuretic. The most significant and potentially dangerous side effect is hyperkalemia (elevated serum potassium). Therefore, potassium levels must be monitored regularly, especially when initiating therapy or when used in combination with ACE inhibitors or ARBs. (Page 99)",
                    "tags": ["Chapter 4", "Heart Failure", "Intermediate", "Page 99"]
                  },
                  {
                    "id": 234,
                    "question": "According to the New York Heart Association (NYHA) functional classification for heart failure, a patient who is comfortable at rest but experiences dyspnea and fatigue with ordinary physical activity, such as walking up a flight of stairs, is in which class?",
                    "choices": [
                      "A. Class I",
                      "B. Class II",
                      "C. Class III",
                      "D. Class IV"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "NYHA Class III is defined by a marked limitation of physical activity. Patients are comfortable at rest, but less than ordinary activity (like walking short distances or climbing stairs) causes symptoms such as fatigue, palpitation, or dyspnea. (Page 96)",
                    "tags": ["Chapter 4", "Heart Failure", "Basic", "Page 96"]
                  },
                  {
                    "id": 235,
                    "question": "A 55-year-old woman is diagnosed with Heart Failure with Preserved Ejection Fraction (HFpEF). Her primary symptoms are related to fluid retention. What is the mainstay of treatment for symptomatic relief in HFpEF?",
                    "choices": [
                      "A. ACE inhibitors",
                      "B. Beta-blockers",
                      "C. Digoxin",
                      "D. Diuretics"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "In HFpEF, the primary problem is diastolic dysfunction, leading to high filling pressures and congestion. While drugs that improve survival in HFrEF have not shown the same benefit, diuretics remain the cornerstone of therapy for managing the signs and symptoms of fluid overload and congestion in these patients. (Page 102)",
                    "tags": ["Chapter 4", "Heart Failure", "Intermediate", "Page 102"]
                  },
                  {
                    "id": 236,
                    "question": "A patient with acute decompensated heart failure presents with hypotension (BP 80/50 mmHg), cool extremities, and signs of poor organ perfusion (e.g., rising creatinine). This clinical picture is best described as:",
                    "choices": [
                      "A. Warm and wet",
                      "B. Warm and dry",
                      "C. Cold and dry",
                      "D. Cold and wet"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.2. HEART FAILURE",
                    "explanation": "This classification describes hemodynamics in acute heart failure. 'Cold' refers to hypoperfusion (hypotension, cool extremities), and 'wet' refers to congestion (edema, rales). This patient has signs of both, placing them in the 'cold and wet' quadrant, which is associated with the highest mortality and may require inotropic or vasopressor support. (Page 101)",
                    "tags": ["Chapter 4", "Heart Failure", "Advanced", "Page 101"]
                  },
                  {
                    "id": 237,
                    "question": "A 45-year-old male is diagnosed with stage III hypertension. His blood pressure in the clinic is consistently 185/115 mmHg. According to the STG, what is the recommended initial therapeutic approach?",
                    "choices": [
                      "A. Lifestyle modification alone for 3 months.",
                      "B. Monotherapy with a thiazide diuretic.",
                      "C. Monotherapy with an ACE inhibitor.",
                      "D. Immediate initiation of a two-drug combination therapy."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.3. HYPERTENSION",
                    "explanation": "For Stage II and III hypertension, or when the blood pressure is more than 20/10 mmHg above the goal, the STG recommends starting treatment with a two-drug combination. This approach is more effective in achieving blood pressure control in a timely manner compared to starting with monotherapy. (Page 109)",
                    "tags": ["Chapter 4", "Hypertension", "Intermediate", "Page 109"]
                  },
                  {
                    "id": 238,
                    "question": "A 60-year-old black patient is diagnosed with hypertension. He has no other comorbidities like diabetes or chronic kidney disease. Which class of antihypertensive medication is generally recommended as a first-line agent in this patient population?",
                    "choices": [
                      "A. An ACE inhibitor",
                      "B. An Angiotensin II Receptor Blocker (ARB)",
                      "C. A Thiazide diuretic or a Calcium Channel Blocker",
                      "D. A Beta-blocker"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.3. HYPERTENSION",
                    "explanation": "In black patients without compelling indications for other agents (like CKD or heart failure), thiazide-type diuretics and calcium channel blockers have been shown to be more effective at lowering blood pressure and improving cardiovascular outcomes compared to ACE inhibitors or ARBs. (Page 109)",
                    "tags": ["Chapter 4", "Hypertension", "Intermediate", "Page 109"]
                  },
                  {
                    "id": 239,
                    "question": "A 55-year-old woman presents to the emergency department with a blood pressure of 220/130 mmHg, severe headache, and confusion. A funduscopic exam reveals papilledema. What is the most likely diagnosis?",
                    "choices": [
                      "A. Hypertensive urgency",
                      "B. Hypertensive emergency",
                      "C. White coat hypertension",
                      "D. Stage II hypertension"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.3. HYPERTENSION",
                    "explanation": "A hypertensive emergency is defined by severely elevated blood pressure accompanied by evidence of acute, ongoing target-organ damage (e.g., encephalopathy, myocardial infarction, papilledema). This situation requires immediate blood pressure reduction with intravenous medications in a monitored setting. Hypertensive urgency involves similar BP levels but without acute organ damage. (Page 112)",
                    "tags": ["Chapter 4", "Hypertension", "Advanced", "Page 112"]
                  },
                  {
                    "id": 240,
                    "question": "A patient with diabetes and hypertension is being treated with an ACE inhibitor. What is the primary reason for choosing an ACE inhibitor in a patient with diabetes?",
                    "choices": [
                      "A. They are more effective at lowering systolic blood pressure than other agents.",
                      "B. They have a beneficial effect on glucose metabolism.",
                      "C. They provide a reno-protective effect by reducing intraglomerular pressure and proteinuria.",
                      "D. They have fewer side effects than other antihypertensive drugs."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.3. HYPERTENSION",
                    "explanation": "In patients with diabetes, ACE inhibitors (and ARBs) are preferred agents because they have been shown to slow the progression of diabetic nephropathy. They achieve this by preferentially dilating the efferent arteriole of the glomerulus, which reduces glomerular filtration pressure and decreases the amount of protein excreted in the urine. (Page 110)",
                    "tags": ["Chapter 4", "Hypertension", "Intermediate", "Page 110"]
                  },
                  {
                    "id": 241,
                    "question": "A 35-year-old pregnant woman develops hypertension (BP 150/95 mmHg) at 24 weeks of gestation, without proteinuria. Which antihypertensive agent is considered safe and is a first-line choice for managing hypertension during pregnancy?",
                    "choices": [
                      "A. Lisinopril",
                      "B. Losartan",
                      "C. Methyldopa",
                      "D. Atenolol"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.3. HYPERTENSION",
                    "explanation": "ACE inhibitors and ARBs are contraindicated in pregnancy due to their teratogenic effects. Methyldopa has a long history of safety and is considered a first-line agent for the treatment of hypertension in pregnancy. Labetalol and nifedipine are also commonly used. (Page 113)",
                    "tags": ["Chapter 4", "Hypertension", "Intermediate", "Page 113"]
                  },
                  {
                    "id": 242,
                    "question": "A patient started on lisinopril for hypertension develops a persistent, dry cough. This side effect is due to an accumulation of which substance?",
                    "choices": [
                      "A. Angiotensin II",
                      "B. Aldosterone",
                      "C. Bradykinin",
                      "D. Renin"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.3. HYPERTENSION",
                    "explanation": "ACE (angiotensin-converting enzyme) is also responsible for the breakdown of bradykinin. By inhibiting ACE, lisinopril leads to an accumulation of bradykinin in the respiratory tract, which is thought to be the cause of the characteristic dry cough associated with this class of drugs. (Page 110)",
                    "tags": ["Chapter 4", "Hypertension", "Advanced", "Page 110"]
                  },
                  {
                    "id": 243,
                    "question": "A 70-year-old man with benign prostatic hyperplasia (BPH) and hypertension is being considered for antihypertensive therapy. Which class of medication would be a logical choice to treat both conditions simultaneously?",
                    "choices": [
                      "A. Thiazide diuretics",
                      "B. Alpha-blockers (e.g., Prazosin, Doxazosin)",
                      "C. Beta-blockers",
                      "D. Calcium channel blockers"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.3. HYPERTENSION",
                    "explanation": "Alpha-adrenergic blockers, such as prazosin, relax smooth muscle in both the blood vessel walls (leading to vasodilation and lower blood pressure) and the bladder neck and prostate (improving urinary symptoms of BPH). This makes them a suitable option for patients with both hypertension and BPH. (Page 111)",
                    "tags": ["Chapter 4", "Hypertension", "Intermediate", "Page 111"]
                  },
                  {
                    "id": 244,
                    "question": "According to the STG, what is the blood pressure target for most patients with hypertension, including those with diabetes or chronic kidney disease?",
                    "choices": [
                      "A. < 150/90 mmHg",
                      "B. < 140/90 mmHg",
                      "C. < 130/80 mmHg",
                      "D. < 120/80 mmHg"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.3. HYPERTENSION",
                    "explanation": "The STG recommends a general blood pressure target of < 140/90 mmHg for the majority of patients being treated for hypertension. While some guidelines may suggest lower targets for specific high-risk populations, <140/90 mmHg is the standard goal presented. (Page 108)",
                    "tags": ["Chapter 4", "Hypertension", "Basic", "Page 108"]
                  },
                  {
                    "id": 245,
                    "question": "A 58-year-old man presents with a 3-month history of recurrent, brief episodes of chest pain that occur with exertion and are relieved by rest. The pain is described as a substernal pressure. What is the most likely diagnosis?",
                    "choices": [
                      "A. Unstable angina",
                      "B. Stable angina pectoris",
                      "C. Prinzmetal's angina",
                      "D. Acute myocardial infarction"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "Stable angina is characterized by a predictable pattern of chest discomfort that is precipitated by a consistent level of physical exertion or emotional stress and is relieved promptly by rest or nitroglycerin. The pattern of symptoms is not changing in frequency or severity. (Page 116)",
                    "tags": ["Chapter 4", "Ischemic Heart Disease", "Intermediate", "Page 116"]
                  },
                  {
                    "id": 246,
                    "question": "A 60-year-old man is brought to the emergency department with a 2-hour history of severe, crushing chest pain radiating to his left arm. The ECG shows ST-segment elevation in leads II, III, and aVF. What is the most likely diagnosis?",
                    "choices": [
                      "A. Acute pericarditis",
                      "B. Acute inferior wall ST-elevation myocardial infarction (STEMI)",
                      "C. Non-ST-elevation myocardial infarction (NSTEMI)",
                      "D. Unstable angina"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "The combination of typical ischemic chest pain and ST-segment elevation on the ECG is diagnostic of an ST-elevation myocardial infarction (STEMI). The affected leads (II, III, aVF) indicate that the inferior wall of the left ventricle is the location of the infarction. (Page 120)",
                    "tags": ["Chapter 4", "Acute Coronary Syndrome", "Intermediate", "Page 120"]
                  },
                  {
                    "id": 247,
                    "question": "What is the immediate and most important therapeutic goal in a patient with a confirmed STEMI?",
                    "choices": [
                      "A. To control the patient's blood pressure.",
                      "B. To relieve the chest pain with morphine.",
                      "C. To rapidly restore blood flow to the infarct-related artery.",
                      "D. To administer a beta-blocker to reduce myocardial oxygen demand."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "In STEMI, there is a complete occlusion of a coronary artery. The primary goal of treatment is timely reperfusion to salvage the ischemic myocardium and improve outcomes. This is achieved either through primary percutaneous coronary intervention (PCI) or with fibrinolytic therapy. 'Time is muscle.' (Page 121)",
                    "tags": ["Chapter 4", "Acute Coronary Syndrome", "Advanced", "Page 121"]
                  },
                  {
                    "id": 248,
                    "question": "A patient with stable angina is prescribed sublingual nitroglycerin. What is the correct instruction to give the patient on how to use this medication for an episode of chest pain?",
                    "choices": [
                      "A. 'Swallow one tablet with a full glass of water every 4 hours.'",
                      "B. 'Place one tablet under your tongue; you can repeat the dose every 5 minutes for up to 3 doses.'",
                      "C. 'Chew one tablet as soon as the chest pain begins.'",
                      "D. 'Apply the nitroglycerin patch to your chest for 12 hours.'"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "For acute anginal episodes, sublingual nitroglycerin should be placed under the tongue to allow for rapid absorption. The standard instruction is to take one tablet, and if the pain is not relieved, another tablet can be taken every 5 minutes, for a maximum of three tablets in 15 minutes. If pain persists, the patient should seek immediate medical attention. (Page 117)",
                    "tags": ["Chapter 4", "Ischemic Heart Disease", "Basic", "Page 117"]
                  },
                  {
                    "id": 249,
                    "question": "Which medication is recommended for all patients with established atherosclerotic cardiovascular disease (e.g., post-MI, stable angina) to prevent future cardiovascular events, unless contraindicated?",
                    "choices": [
                      "A. Digoxin",
                      "B. Warfarin",
                      "C. A statin (e.g., Atorvastatin)",
                      "D. Furosemide"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "Statin therapy is a cornerstone of secondary prevention in patients with atherosclerotic cardiovascular disease. High-intensity statins are recommended to lower LDL cholesterol levels, stabilize atherosclerotic plaques, and reduce the risk of future events like MI and stroke, regardless of the baseline cholesterol level. (Page 118)",
                    "tags": ["Chapter 4", "Ischemic Heart Disease", "Intermediate", "Page 118"]
                  },
                  {
                    "id": 250,
                    "question": "A patient presents with chest pain and is diagnosed with a Non-ST-elevation myocardial infarction (NSTEMI). In addition to antiplatelet and anticoagulant therapy, which medication is crucial for reducing myocardial oxygen demand and is recommended to be started within 24 hours?",
                    "choices": [
                      "A. An oral beta-blocker",
                      "B. A loop diuretic",
                      "C. A calcium channel blocker",
                      "D. An ACE inhibitor"
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "In patients with ACS (including NSTEMI), oral beta-blockers should be initiated within the first 24 hours, provided there are no contraindications (like acute heart failure or bradycardia). Beta-blockers reduce myocardial oxygen demand by decreasing heart rate, blood pressure, and contractility, which can limit infarct size and reduce mortality. (Page 119)",
                    "tags": ["Chapter 4", "Acute Coronary Syndrome", "Intermediate", "Page 119"]
                  },
                  {
                    "id": 251,
                    "question": "A patient experiences chest pain at rest, often in the early morning, which is associated with transient ST-segment elevation on the ECG. The symptoms resolve spontaneously. Coronary angiography is normal. What is the most likely diagnosis?",
                    "choices": [
                      "A. Stable angina",
                      "B. Unstable angina",
                      "C. Vasospastic (Prinzmetal's) angina",
                      "D. Non-ST-elevation myocardial infarction"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "Vasospastic or Prinzmetal's angina is caused by a transient, focal spasm of a coronary artery, leading to a high-grade obstruction and ischemia. It classically occurs at rest, often at night or in the early morning. The treatment of choice involves calcium channel blockers and nitrates to prevent and relieve the spasm. (Page 116)",
                    "tags": ["Chapter 4", "Ischemic Heart Disease", "Advanced", "Page 116"]
                  },
                  {
                    "id": 252,
                    "question": "In the initial management of a patient with suspected Acute Coronary Syndrome (ACS), what is the correct initial dose of aspirin to be administered?",
                    "choices": [
                      "A. 81 mg, enteric-coated",
                      "B. 100 mg, chewable",
                      "C. 162 to 325 mg, non-enteric-coated and chewed",
                      "D. 500 mg, swallowed"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "For rapid antiplatelet effect in suspected ACS, a loading dose of non-enteric-coated aspirin should be given immediately. The recommended dose is 162 mg to 325 mg, and the tablet should be chewed to speed absorption. This rapid inhibition of platelet aggregation is crucial in the initial phase of ACS. (Page 119)",
                    "tags": ["Chapter 4", "Acute Coronary Syndrome", "Basic", "Page 119"]
                  },
                  {
                    "id": 253,
                    "question": "What is the primary mechanism by which beta-blockers provide benefit in stable angina?",
                    "choices": [
                      "A. They increase coronary blood flow by dilating the coronary arteries.",
                      "B. They reduce myocardial oxygen demand by decreasing heart rate, blood pressure, and contractility.",
                      "C. They prevent the formation of blood clots within the coronary arteries.",
                      "D. They increase the oxygen-carrying capacity of the blood."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "Beta-blockers are a first-line therapy for stable angina. Their main benefit comes from reducing myocardial oxygen consumption. They achieve this by lowering the heart rate, reducing the force of the heart's contraction (negative inotropy), and lowering blood pressure, which decreases the workload on the heart, especially during exertion. (Page 117)",
                    "tags": ["Chapter 4", "Ischemic Heart Disease", "Intermediate", "Page 117"]
                  },
                  {
                    "id": 254,
                    "question": "A 66-year-old male is discharged after an NSTEMI. His lipid panel shows an LDL cholesterol of 150 mg/dL. According to secondary prevention guidelines, what is the recommended therapy?",
                    "choices": [
                      "A. Lifestyle modification and diet alone.",
                      "B. Low-intensity statin therapy.",
                      "C. High-intensity statin therapy (e.g., Atorvastatin 40-80 mg).",
                      "D. Fibrate therapy (e.g., Gemfibrozil)."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "Patients who have had an ACS event are at very high risk for future events. The guidelines strongly recommend high-intensity statin therapy for secondary prevention to achieve at least a 50% reduction in LDL cholesterol. The goal is to lower LDL as much as possible, often to <70 mg/dL. (Page 123)",
                    "tags": ["Chapter 4", "Secondary Prevention", "Intermediate", "Page 123"]
                  },
                  {
                    "id": 255,
                    "question": "A 70-year-old woman is diagnosed with giant cell arteritis. She is at high risk for developing which of the following life-threatening cardiovascular complications if left untreated?",
                    "choices": [
                      "A. Acute myocardial infarction",
                      "B. Aortic aneurysm and dissection",
                      "C. Pulmonary embolism",
                      "D. Ischemic stroke"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "Giant cell arteritis is a form of vasculitis that affects large vessels, particularly the aorta and its main branches. The inflammation can weaken the aortic wall, leading to the formation of aneurysms and increasing the risk of a life-threatening aortic dissection. Prompt treatment with corticosteroids is essential. (Page 128)",
                    "tags": ["Chapter 4", "Vasculitis", "Advanced", "Page 128"]
                  },
                  {
                    "id": 256,
                    "question": "A 28-year-old woman presents with fever, new-onset heart murmur, and painful nodules on her fingertips (Osler's nodes). Blood cultures are drawn. What is the most likely diagnosis?",
                    "choices": [
                      "A. Acute rheumatic fever",
                      "B. Infective endocarditis",
                      "C. Systemic lupus erythematosus",
                      "D. Kawasaki disease"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.4. ATHEROSCLEROTIC CARDIOVASCULAR DISEASES",
                    "explanation": "The constellation of fever, a new or changed heart murmur, and peripheral immunologic or vascular phenomena (like Osler's nodes or Janeway lesions) is highly suggestive of infective endocarditis, which is an infection of the heart's endocardial surface, most commonly the valves. (Page 124)",
                    "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 124"]
                  },{
                    "id": 227,
                    "question": "A 12-year-old child is diagnosed with acute rheumatic fever with carditis but without valvular disease. According to the STG, what is the recommended duration for secondary prophylaxis with Benzathine Penicillin G?",
                    "choices": [
                      "A. 5 years",
                      "B. 10 years or until age 21, whichever is longer.",
                      "C. 10 years or until age 40, whichever is longer.",
                      "D. Lifelong"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "The STG specifies the duration of secondary prophylaxis based on the clinical presentation. For a patient with rheumatic fever and carditis but no residual valvular disease, the recommendation is 10 years of prophylaxis or until the patient reaches age 21, whichever period is longer. (Page 134)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Intermediate", "Page 134"]
                  },
                  {
                    "id": 228,
                    "question": "Which of the following is considered a major criterion in the Jones criteria for the diagnosis of a first episode of rheumatic fever?",
                    "choices": [
                      "A. Fever",
                      "B. Arthralgia",
                      "C. Carditis",
                      "D. Elevated ESR or C-reactive protein"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "The Jones criteria are used to diagnose acute rheumatic fever. The five major criteria are: Carditis, Polyarthritis, Chorea, Erythema marginatum, and Subcutaneous nodules. Fever, arthralgia, and elevated inflammatory markers are all minor criteria. (Page 132)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Basic", "Page 132"]
                  },
                  {
                    "id": 229,
                    "question": "A 10-year-old child presents with a sore throat, and a rapid antigen test is positive for Group A Streptococcus. To prevent an initial attack of acute rheumatic fever, what is the most appropriate primary prevention strategy?",
                    "choices": [
                      "A. A single intramuscular dose of Benzathine Penicillin G.",
                      "B. A 5-day course of oral Azithromycin.",
                      "C. A 10-day course of oral Amoxicillin.",
                      "D. A 7-day course of oral Cephalexin."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "Primary prevention of ARF involves the prompt and adequate treatment of Group A Streptococcal pharyngitis. The STG lists a single IM dose of Benzathine Penicillin G as a highly effective regimen. A 10-day course of oral penicillin or amoxicillin is an alternative, but the single IM dose ensures compliance. (Page 133)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Intermediate", "Page 133"]
                  },
                  {
                    "id": 230,
                    "question": "A 25-year-old woman with established rheumatic heart disease involving the mitral valve requires lifelong secondary prophylaxis. She has a documented severe anaphylactic reaction to penicillin. What is the most appropriate alternative prophylactic agent?",
                    "choices": [
                      "A. Amoxicillin",
                      "B. Cephalexin",
                      "C. Erythromycin",
                      "D. Vancomycin"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "For patients requiring secondary ARF prophylaxis who have a severe penicillin allergy, a macrolide such as Erythromycin is the recommended alternative. Cephalosporins may have cross-reactivity and should be avoided in cases of anaphylaxis. Amoxicillin is a penicillin and is contraindicated. (Page 134)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Advanced", "Page 134"]
                  },
                  {
                    "id": 231,
                    "question": "Which valvular lesion is the most common long-term consequence of rheumatic heart disease?",
                    "choices": [
                      "A. Aortic stenosis",
                      "B. Mitral stenosis",
                      "C. Tricuspid regurgitation",
                      "D. Pulmonic stenosis"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "Chronic rheumatic heart disease results from the inflammation and scarring of heart valves following acute rheumatic fever. The mitral valve is the most commonly affected valve, with mitral stenosis being the characteristic lesion that develops years after the initial illness. (Page 131)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Basic", "Page 131"]
                  },
                  {
                    "id": 232,
                    "question": "A 15-year-old presents with a migratory polyarthritis affecting the knees and ankles, and a low-grade fever. An ASO titer is elevated. According to the Jones criteria, what additional finding would be required to diagnose acute rheumatic fever?",
                    "choices": [
                      "A. A prolonged PR interval on ECG.",
                      "B. A history of a sore throat two weeks ago.",
                      "C. An elevated C-reactive protein.",
                      "D. A new heart murmur."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "The diagnosis of ARF requires evidence of a preceding Group A Strep infection plus two major criteria, OR one major and two minor criteria. The patient already has one major criterion (polyarthritis). A prolonged PR interval is a minor criterion, which, along with another minor criterion like fever or elevated CRP, would satisfy the diagnostic requirements. A new heart murmur would indicate carditis (a second major criterion). (Page 132)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Advanced", "Page 132"]
                  },
                  {
                    "id": 233,
                    "question": "What is the primary medication used for the treatment of arthritis and arthralgia in acute rheumatic fever?",
                    "choices": [
                      "A. Prednisone",
                      "B. Penicillin",
                      "C. Aspirin",
                      "D. Codeine"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "The arthritis of acute rheumatic fever is exquisitely sensitive to salicylates. High-dose Aspirin is the first-line treatment for the joint manifestations and typically provides rapid relief. Penicillin treats the underlying streptococcal infection but does not directly treat the arthritis. Corticosteroids are reserved for severe carditis. (Page 133)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Intermediate", "Page 133"]
                  },
                  {
                    "id": 234,
                    "question": "A patient with severe carditis due to acute rheumatic fever is being treated. Which medication is indicated to suppress the intense inflammation and manage heart failure?",
                    "choices": [
                      "A. High-dose intravenous immunoglobulin (IVIG)",
                      "B. High-dose Aspirin",
                      "C. Oral Prednisone",
                      "D. Intramuscular Benzathine Penicillin G"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "For patients with severe carditis, particularly those with cardiomegaly or heart failure, corticosteroids such as Prednisone are recommended to control the inflammatory process. Aspirin is typically withheld initially in these cases until the steroid course is completed. (Page 133)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Advanced", "Page 133"]
                  },
                  {
                    "id": 235,
                    "question": "What is the rationale for secondary prevention (prophylaxis) after an episode of acute rheumatic fever?",
                    "choices": [
                      "A. To prevent the development of streptococcal pharyngitis.",
                      "B. To treat the long-term symptoms of valve damage.",
                      "C. To prevent recurrent attacks of acute rheumatic fever and worsening of cardiac damage.",
                      "D. To eradicate the streptococcal carrier state from the patient's household."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "Patients who have had one attack of ARF are at very high risk for recurrence if they get another Group A Strep infection. Secondary prophylaxis with continuous antibiotics (like Benzathine Penicillin G) is aimed at preventing these recurrent infections, which in turn prevents recurrent attacks of ARF and halts the progression of rheumatic heart disease. (Page 133)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Basic", "Page 133"]
                  },
                  {
                    "id": 236,
                    "question": "A patient had rheumatic fever at age 10 with carditis and has persistent, severe mitral regurgitation. The patient is now 30 years old. What is the recommended duration of secondary prophylaxis?",
                    "choices": [
                      "A. Until age 21",
                      "B. Until age 30",
                      "C. Until age 40",
                      "D. Lifelong"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "For patients with rheumatic fever and persistent valvular disease, the risk of recurrence and worsening damage is high. Therefore, the STG recommends lifelong secondary prophylaxis for this high-risk group. (Page 134)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Intermediate", "Page 134"]
                  },
                  {
                    "id": 237,
                    "question": "Sydenham's chorea is a major manifestation of acute rheumatic fever. It is characterized by which of the following clinical features?",
                    "choices": [
                      "A. Symmetrical weakness of the lower extremities.",
                      "B. Involuntary, purposeless, and rapid movements, often associated with emotional lability.",
                      "C. A fine resting tremor of the hands.",
                      "D. A painful, migratory arthritis of the large joints."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "Sydenham's chorea is a neurological manifestation of ARF. It is a movement disorder characterized by abrupt, non-rhythmic, involuntary movements (chorea), muscular weakness, and emotional disturbances. It is often a late manifestation, appearing months after the initial streptococcal infection. (Page 132)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Intermediate", "Page 132"]
                  },
                  {
                    "id": 238,
                    "question": "The diagnosis of a first episode of rheumatic fever in a patient with evidence of a preceding Group A streptococcal infection requires:",
                    "choices": [
                      "A. One major and one minor Jones criterion.",
                      "B. Two major Jones criteria.",
                      "C. Three minor Jones criteria.",
                      "D. One major Jones criterion and an elevated ASO titer."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "According to the 2015 revised Jones criteria, the diagnosis of a primary episode of ARF is established by the presence of two major manifestations OR one major and two minor manifestations, in addition to evidence of a recent Group A Strep infection. (Page 132)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Basic", "Page 132"]
                  },
                  {
                    "id": 239,
                    "question": "A patient with acute rheumatic fever is treated with high-dose aspirin for arthritis. Which potential side effect should be monitored for in this patient?",
                    "choices": [
                      "A. Hypertension",
                      "B. Salicylism (tinnitus, headache, dizziness)",
                      "C. Peripheral neuropathy",
                      "D. Hypoglycemia"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "High doses of aspirin, as used in ARF, can lead to salicylate toxicity (salicylism). Early symptoms include tinnitus (ringing in the ears), headache, and dizziness. Monitoring for these symptoms is important, and serum salicylate levels may be checked. (Page 133)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Intermediate", "Page 133"]
                  },
                  {
                    "id": 240,
                    "question": "Which of the following is the most specific laboratory test for confirming a recent Group A streptococcal infection in a patient suspected of having acute rheumatic fever?",
                    "choices": [
                      "A. White blood cell count",
                      "B. C-reactive protein (CRP)",
                      "C. Erythrocyte sedimentation rate (ESR)",
                      "D. Anti-streptolysin O (ASO) titer"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "While CRP and ESR are markers of inflammation, they are non-specific. The ASO titer is a measure of antibodies against streptolysin O, an enzyme produced by Group A Streptococcus. An elevated or rising ASO titer is strong evidence of a recent streptococcal infection. (Page 132)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Intermediate", "Page 132"]
                  },
                  {
                    "id": 241,
                    "question": "The characteristic rash of acute rheumatic fever, known as erythema marginatum, is best described as:",
                    "choices": [
                      "A. A painful, nodular rash on the shins.",
                      "B. A diffuse, sandpaper-like rash over the trunk.",
                      "C. A non-pruritic rash with pink macules that have clear centers and serpiginous margins.",
                      "D. A vesicular rash that follows a dermatomal distribution."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "Erythema marginatum is a rare but specific major manifestation of ARF. It is a distinctive rash, typically found on the trunk and limbs, consisting of pink or red macules that spread outwards, leaving a clear center, creating a wavy or snake-like (serpiginous) border. (Page 132)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Advanced", "Page 132"]
                  },
                  {
                    "id": 242,
                    "question": "A patient with a history of rheumatic fever without carditis had their last attack 7 years ago at the age of 14. When can their secondary prophylaxis be discontinued?",
                    "choices": [
                      "A. Now (at age 21)",
                      "B. At age 24 (after 10 years)",
                      "C. At age 25",
                      "D. It should be continued for life."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "For rheumatic fever without carditis, the recommendation is to continue prophylaxis for 5 years or until age 21, whichever is longer. Since the patient is now 21, and has completed more than 5 years of prophylaxis, it is appropriate to discontinue it. (Page 134)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Intermediate", "Page 134"]
                  },
                  {
                    "id": 243,
                    "question": "What is the primary goal of treating the initial Group A streptococcal pharyngitis (primary prevention)?",
                    "choices": [
                      "A. To shorten the duration of the sore throat symptoms.",
                      "B. To prevent the patient from being contagious to others.",
                      "C. To prevent the non-suppurative complication of acute rheumatic fever.",
                      "D. To prevent the suppurative complication of a peritonsillar abscess."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "While treating strep throat does alleviate symptoms and prevent complications like abscesses, the most crucial public health reason for ensuring adequate antibiotic treatment is to prevent the development of acute rheumatic fever, which can lead to lifelong cardiac disease. (Page 133)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Basic", "Page 133"]
                  },
                  {
                    "id": 244,
                    "question": "Subcutaneous nodules, a major criterion for rheumatic fever, are most commonly found over which areas?",
                    "choices": [
                      "A. The palms of the hands and soles of the feet.",
                      "B. Bony prominences and extensor surfaces of tendons.",
                      "C. The soft tissues of the face and neck.",
                      "D. The abdomen and chest wall."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "Subcutaneous nodules are firm, painless nodules that are a rare but specific finding in ARF. They are typically found over bony surfaces or tendons, such as the elbows, knuckles, knees, and scalp. (Page 132)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Advanced", "Page 132"]
                  },
                  {
                    "id": 245,
                    "question": "An 18-year-old patient with known rheumatic heart disease is scheduled for a dental extraction. She is on regular secondary prophylaxis with intramuscular Benzathine Penicillin G every 4 weeks. Does she require additional antibiotic prophylaxis before the dental procedure?",
                    "choices": [
                      "A. Yes, she needs a dose of oral Amoxicillin 1 hour before the procedure.",
                      "B. Yes, she needs a dose of intravenous Ampicillin 30 minutes before the procedure.",
                      "C. No, her regular prophylaxis regimen is sufficient.",
                      "D. No, dental procedures no longer require endocarditis prophylaxis."
                    ],
                    "correctAnswer": 0,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "The monthly dose of Benzathine Penicillin G provides low antibiotic levels that are sufficient to prevent ARF recurrence but are not adequate for preventing infective endocarditis from the bacteremia caused by a dental procedure. Therefore, she needs a separate, standard prophylactic dose (like Amoxicillin 2g orally) before the procedure. (Page 134, cross-references with IE prophylaxis principles)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Advanced", "Page 134"]
                  },
                  {
                    "id": 246,
                    "question": "The pathophysiology of acute rheumatic fever is believed to be an autoimmune reaction triggered by:",
                    "choices": [
                      "A. A direct bacterial invasion of the heart tissue by Streptococcus.",
                      "B. The release of a toxin from Streptococcus that damages joints and the heart.",
                      "C. Molecular mimicry between streptococcal antigens and human host tissues.",
                      "D. The formation of immune complexes that deposit in the heart and joints."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.5. RHEUMATIC HEART DISEASE",
                    "explanation": "The leading hypothesis for the pathogenesis of ARF is molecular mimicry. It is thought that antibodies produced by the host against certain streptococcal components (like the M protein) cross-react with similar-looking proteins in human tissues, particularly the heart, joints, and brain, leading to an autoimmune inflammatory response. (Page 131)",
                    "tags": ["Chapter 4", "Rheumatic Heart Disease", "Advanced", "Page 131"]
                  }, {
                    "id": 247,
                    "question": "A 72-year-old man presents with exertional dyspnea, angina, and syncope. On examination, a harsh, crescendo-decrescendo systolic ejection murmur is heard at the right upper sternal border, radiating to the carotid arteries. What is the most likely diagnosis?",
                    "choices": [
                      "A. Mitral regurgitation",
                      "B. Aortic regurgitation",
                      "C. Mitral stenosis",
                      "D. Aortic stenosis"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "The classic triad of symptoms (dyspnea, angina, syncope) combined with a systolic ejection murmur radiating to the carotids is pathognomonic for severe aortic stenosis. This is the most common valvular lesion in the elderly in developed countries. (Page 136)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 136"]
                  },
                  {
                    "id": 248,
                    "question": "A 35-year-old woman with a history of rheumatic fever presents with progressive shortness of breath. Examination reveals a low-pitched, rumbling diastolic murmur heard best at the apex with the patient in the left lateral decubitus position. What is the most likely valvular abnormality?",
                    "choices": [
                      "A. Aortic stenosis",
                      "B. Mitral stenosis",
                      "C. Aortic regurgitation",
                      "D. Mitral regurgitation"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "A mid-diastolic rumbling murmur at the apex, often accompanied by an opening snap, is the classic auscultatory finding of mitral stenosis. Her history of rheumatic fever is the most common cause of this condition worldwide. (Page 138)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 138"]
                  },
                  {
                    "id": 249,
                    "question": "A patient with severe symptomatic aortic stenosis is being considered for surgery. What is the definitive treatment for this condition?",
                    "choices": [
                      "A. Long-term medical management with beta-blockers and diuretics.",
                      "B. Percutaneous balloon aortic valvuloplasty.",
                      "C. Aortic valve replacement.",
                      "D. Lifelong anticoagulation with warfarin."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "Once a patient with severe aortic stenosis becomes symptomatic, the prognosis is very poor without intervention. Aortic valve replacement (either surgical or transcatheter) is the only definitive treatment that improves survival and relieves symptoms. Medical therapy is for palliation only. (Page 137)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 137"]
                  },
                  {
                    "id": 250,
                    "question": "A 65-year-old man has a high-pitched, blowing, decrescendo diastolic murmur heard at the left sternal border. His blood pressure is 160/50 mmHg. What physical sign is commonly associated with this condition?",
                    "choices": [
                      "A. A weak, thready pulse (pulsus parvus et tardus)",
                      "B. An irregularly irregular pulse",
                      "C. A bounding, 'water-hammer' pulse (Corrigan's pulse)",
                      "D. A fixed, split S2"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "The diastolic murmur and wide pulse pressure (systolic minus diastolic, 110 mmHg in this case) are characteristic of chronic aortic regurgitation. The rapid runoff of blood back into the left ventricle during diastole causes a collapsing or 'water-hammer' pulse, along with other peripheral signs like Quincke's pulse and de Musset's sign. (Page 140)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Advanced", "Page 140"]
                  },
                  {
                    "id": 251,
                    "question": "A 55-year-old man is found to have a pansystolic (holosystolic) murmur heard best at the apex, radiating to the axilla. This finding is most characteristic of which valvular lesion?",
                    "choices": [
                      "A. Aortic stenosis",
                      "B. Mitral valve prolapse",
                      "C. Mitral regurgitation",
                      "D. Aortic regurgitation"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "The classic murmur of chronic mitral regurgitation is a high-pitched, blowing, pansystolic murmur that is heard best at the cardiac apex and radiates towards the left axilla. (Page 141)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 141"]
                  },
                  {
                    "id": 252,
                    "question": "For a patient with severe mitral stenosis who is in atrial fibrillation, which medication is essential to control the heart rate and prevent thromboembolism?",
                    "choices": [
                      "A. Aspirin",
                      "B. Furosemide",
                      "C. Warfarin",
                      "D. Nitroglycerin"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "Atrial fibrillation is a common complication of mitral stenosis due to left atrial enlargement. This combination carries a very high risk of stroke. Long-term anticoagulation with Warfarin is mandatory to prevent left atrial thrombus formation. (Page 139)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 139"]
                  },
                  {
                    "id": 253,
                    "question": "A young, asymptomatic woman is found to have a mid-systolic click on cardiac auscultation. This finding is most suggestive of:",
                    "choices": [
                      "A. Rheumatic heart disease",
                      "B. Bicuspid aortic valve",
                      "C. Mitral valve prolapse",
                      "D. Hypertrophic cardiomyopathy"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "The hallmark auscultatory finding of mitral valve prolapse is the mid-systolic click, which may or may not be followed by a late systolic murmur of mitral regurgitation. (Page 141)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Basic", "Page 141"]
                  },
                  {
                    "id": 254,
                    "question": "Which of the following medical therapies is generally contraindicated in patients with severe aortic stenosis?",
                    "choices": [
                      "A. Diuretics for heart failure symptoms.",
                      "B. Beta-blockers for associated hypertension.",
                      "C. Vasodilators (e.g., nitrates, ACE inhibitors).",
                      "D. Statins for hyperlipidemia."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "In severe aortic stenosis, cardiac output is dependent on adequate preload and afterload. Vasodilators can cause a precipitous drop in blood pressure and systemic vascular resistance, leading to profound hypotension and syncope. They should be used with extreme caution, if at all. (Page 137)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Advanced", "Page 137"]
                  },
                  {
                    "id": 255,
                    "question": "A patient develops acute, severe aortic regurgitation due to an aortic dissection. What is the expected clinical presentation?",
                    "choices": [
                      "A. A wide pulse pressure and bounding pulses.",
                      "B. A slow, insidious onset of dyspnea on exertion.",
                      "C. Rapid onset of pulmonary edema and cardiogenic shock.",
                      "D. A loud, harsh systolic murmur."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "In acute aortic regurgitation, the left ventricle does not have time to dilate and adapt to the sudden volume overload. This leads to a rapid increase in left ventricular end-diastolic pressure, which is transmitted to the pulmonary circulation, causing acute pulmonary edema and cardiogenic shock. (Page 139)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Advanced", "Page 139"]
                  },
                  {
                    "id": 256,
                    "question": "What is the primary goal of medical therapy for patients with chronic, asymptomatic mitral regurgitation?",
                    "choices": [
                      "A. To reverse the valvular leakage.",
                      "B. To prevent the development of atrial fibrillation.",
                      "C. Afterload reduction to improve forward cardiac output and delay LV dysfunction.",
                      "D. Rate control with beta-blockers."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "In asymptomatic patients with severe mitral regurgitation, medical therapy with vasodilators (afterload reduction), such as ACE inhibitors, is aimed at reducing the resistance the left ventricle pumps against. This promotes forward blood flow, reduces the regurgitant fraction, and can help delay the onset of left ventricular dysfunction. (Page 142)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 142"]
                  },
                  {
                    "id": 257,
                    "question": "A patient with mitral stenosis develops hemoptysis. This symptom is typically caused by:",
                    "choices": [
                      "A. Rupture of a pulmonary artery aneurysm.",
                      "B. Coexisting lung cancer.",
                      "C. Pulmonary embolism from a left atrial thrombus.",
                      "D. Rupture of bronchial veins due to high pulmonary venous pressure."
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "The obstruction at the mitral valve leads to increased left atrial pressure, which is transmitted back to the pulmonary veins. This chronic pulmonary venous hypertension can cause congestion and rupture of the thin-walled bronchial veins, leading to hemoptysis. (Page 138)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Advanced", "Page 138"]
                  },
                  {
                    "id": 258,
                    "question": "The definitive diagnosis and assessment of the severity of any valvular heart disease is best achieved by which imaging modality?",
                    "choices": [
                      "A. Chest X-ray",
                      "B. Electrocardiogram (ECG)",
                      "C. Transthoracic Echocardiography (TTE)",
                      "D. Cardiac catheterization"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "Echocardiography is the cornerstone of diagnosis for valvular heart disease. It allows for direct visualization of the valve structure and function, assessment of chamber sizes, estimation of pressure gradients, and quantification of the severity of stenosis or regurgitation using Doppler techniques. (Page 136)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Basic", "Page 136"]
                  },
                  {
                    "id": 259,
                    "question": "A 40-year-old man requires an aortic valve replacement. He is an active athlete and wishes to avoid lifelong anticoagulation. Which type of prosthetic valve would be most suitable for him?",
                    "choices": [
                      "A. A mechanical bileaflet tilting disc valve.",
                      "B. A bioprosthetic (tissue) valve.",
                      "C. A homograft (human cadaver) valve.",
                      "D. A caged-ball valve."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "The main advantage of a bioprosthetic (tissue) valve is that it does not typically require long-term anticoagulation with warfarin. This makes it a preferred choice for patients who cannot take anticoagulants or wish to avoid them. The trade-off is that these valves are less durable than mechanical valves and may require re-operation in the future. (Page 137)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 137"]
                  },
                  {
                    "id": 260,
                    "question": "The murmur of aortic regurgitation is best heard with the patient sitting up, leaning forward, and in which phase of respiration?",
                    "choices": [
                      "A. Held full inspiration.",
                      "B. Held full expiration.",
                      "C. During quiet, normal breathing.",
                      "D. The phase of respiration does not affect the murmur."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "To best hear the high-pitched, blowing diastolic murmur of aortic regurgitation, specific maneuvers are used. Having the patient sit up, lean forward, and hold their breath in full expiration brings the aortic root closer to the chest wall, making the murmur more audible. (Page 140)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 140"]
                  },
                  {
                    "id": 261,
                    "question": "Which of the following is an indication for surgical intervention in a patient with chronic severe mitral regurgitation?",
                    "choices": [
                      "A. The presence of a loud murmur on auscultation.",
                      "B. Mild left atrial enlargement on echocardiogram.",
                      "C. The onset of symptoms (e.g., dyspnea) or evidence of left ventricular dysfunction (e.g., EF < 60%).",
                      "D. The development of mild pulmonary hypertension."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "The decision for surgery in chronic mitral regurgitation is based on the development of either symptoms or objective evidence of deteriorating left ventricular function (decreasing ejection fraction or increasing ventricular size). The goal is to intervene before irreversible LV damage occurs. (Page 142)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Advanced", "Page 142"]
                  },
                  {
                    "id": 262,
                    "question": "A pulsus parvus et tardus (a weak and delayed carotid upstroke) is a classic physical exam finding in which valvular condition?",
                    "choices": [
                      "A. Mitral stenosis",
                      "B. Aortic regurgitation",
                      "C. Aortic stenosis",
                      "D. Mitral regurgitation"
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "In severe aortic stenosis, the obstruction to outflow from the left ventricle results in a diminished volume of blood being ejected into the aorta and a delayed peak in the arterial pulse. This is felt in the carotid arteries as a weak (parvus) and delayed (tardus) upstroke. (Page 136)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 136"]
                  },
                  {
                    "id": 263,
                    "question": "The primary hemodynamic problem in mitral stenosis is:",
                    "choices": [
                      "A. Volume overload of the left ventricle.",
                      "B. Pressure overload of the left ventricle.",
                      "C. Obstruction of blood flow from the left atrium to the left ventricle.",
                      "D. Obstruction of blood flow from the right ventricle to the pulmonary artery."
                    ],
                    "correctAnswer": 2,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "Mitral stenosis is a narrowing of the mitral valve orifice. This creates a mechanical obstruction that impedes the flow of blood from the left atrium into the left ventricle during diastole, leading to increased left atrial pressure and pulmonary congestion. (Page 138)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Basic", "Page 138"]
                  },
                  {
                    "id": 264,
                    "question": "What is the most common cause of aortic stenosis in a patient under the age of 60?",
                    "choices": [
                      "A. Rheumatic heart disease",
                      "B. Infective endocarditis",
                      "C. Calcific degeneration of a normal trileaflet valve",
                      "D. Calcification of a congenitally bicuspid aortic valve"
                    ],
                    "correctAnswer": 3,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "While senile calcific degeneration is the most common cause in the elderly, in younger patients (typically <60-70), aortic stenosis is most often due to the accelerated calcification and fibrosis of a congenitally bicuspid valve. (Page 136)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 136"]
                  },
                  {
                    "id": 265,
                    "question": "In a patient with chronic aortic regurgitation, the left ventricle compensates for the volume overload through which mechanism?",
                    "choices": [
                      "A. Concentric hypertrophy",
                      "B. Eccentric hypertrophy",
                      "C. Decreased contractility",
                      "D. Increased heart rate"
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "To accommodate the large volume of blood (forward stroke volume plus the regurgitant volume), the left ventricle undergoes eccentric hypertrophy. This means the chamber dilates and the walls increase in muscle mass, allowing it to handle the increased volume while maintaining cardiac output, often for many years. (Page 140)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Advanced", "Page 140"]
                  },
                  {
                    "id": 266,
                    "question": "A patient with severe mitral regurgitation due to a ruptured chorda tendineae presents with acute pulmonary edema. What is the definitive treatment?",
                    "choices": [
                      "A. Medical stabilization with diuretics and vasodilators followed by elective surgery.",
                      "B. Urgent surgical mitral valve repair or replacement.",
                      "C. Intra-aortic balloon pump placement.",
                      "D. Percutaneous balloon mitral valvuloplasty."
                    ],
                    "correctAnswer": 1,
                    "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.6. VALVULAR HEART DISEASE",
                    "explanation": "Acute severe mitral regurgitation is a surgical emergency. The sudden, large volume of regurgitant flow into an unprepared left atrium causes a rapid rise in pulmonary pressures and cardiogenic shock. While initial medical stabilization is important, definitive treatment requires urgent surgical intervention to repair or replace the mitral valve. (Page 141)",
                    "tags": ["Chapter 4", "Valvular Heart Disease", "Intermediate", "Page 141"]
                  },{
      "id": 247,
      "question": "A 30-year-old intravenous drug user presents with a high fever, chills, and malaise for one week. On examination, there are splinter hemorrhages under his fingernails and a new, holosystolic murmur loudest at the left lower sternal border that increases with inspiration. Which of the following is the most likely diagnosis?",
      "choices": [
        "A. Acute rheumatic fever",
        "B. Septic arthritis",
        "C. Infective endocarditis",
        "D. Systemic lupus erythematosus"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The combination of fever, constitutional symptoms, a new heart murmur, and peripheral stigmata (like splinter hemorrhages) in a patient with a major risk factor (IV drug use) is highly suggestive of infective endocarditis. The murmur's characteristics suggest tricuspid regurgitation, common in IV drug users. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 143"]
    },
    {
      "id": 248,
      "question": "According to the modified Duke criteria, which of the following is considered a major criterion for the diagnosis of infective endocarditis?",
      "choices": [
        "A. Fever > 38.0°C",
        "B. A single positive blood culture for a non-typical organism.",
        "C. Echocardiographic evidence of an oscillating intracardiac mass on a valve (vegetation).",
        "D. Presence of Roth spots on fundoscopy."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The modified Duke criteria have two major criteria: 1) Positive blood cultures for typical organisms, and 2) Evidence of endocardial involvement, which includes positive echocardiogram findings (vegetation, abscess, or new valve regurgitation). Fever and vascular phenomena like Roth spots are minor criteria. (Page 144)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 144"]
    },
    {
      "id": 249,
      "question": "What is the most common causative organism of infective endocarditis in patients with a prosthetic heart valve within the first two months after surgery (early PVE)?",
      "choices": [
        "A. Viridans group streptococci",
        "B. Staphylococcus aureus",
        "C. Coagulase-negative staphylococci (e.g., S. epidermidis)",
        "D. Enterococcus faecalis"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Early prosthetic valve endocarditis (within 2 months of surgery) is most often caused by nosocomial organisms introduced during the perioperative period. Coagulase-negative staphylococci, particularly Staphylococcus epidermidis, are the most frequent pathogens. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 146"]
    },
    {
      "id": 250,
      "question": "A patient with suspected infective endocarditis has three sets of blood cultures drawn over 24 hours. All three are positive for Streptococcus gallolyticus (formerly S. bovis). This bacteriological finding satisfies which of the Duke criteria?",
      "choices": [
        "A. One major criterion",
        "B. One minor criterion",
        "C. Two minor criteria",
        "D. It does not satisfy any criterion."
      ],
      "correctAnswer": 0,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Persistently positive blood cultures with a typical microorganism for infective endocarditis is a major Duke criterion. Streptococcus gallolyticus is considered a typical organism, and having multiple positive cultures meets this criterion. (Page 144)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 144"]
    },
    {
      "id": 251,
      "question": "Which of the following is the most common causative organism in native valve endocarditis in a patient who is an intravenous drug user?",
      "choices": [
        "A. Streptococcus pneumoniae",
        "B. Staphylococcus aureus",
        "C. Pseudomonas aeruginosa",
        "D. Candida albicans"
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "While various organisms can cause IE in IV drug users, Staphylococcus aureus is by far the most common pathogen. It is often introduced from the skin flora during injections and has a predilection for affecting the tricuspid valve. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 146"]
    },
    {
      "id": 252,
      "question": "A definitive diagnosis of infective endocarditis by the modified Duke criteria can be made with which of the following combinations?",
      "choices": [
        "A. One major and one minor criterion.",
        "B. Two minor criteria.",
        "C. One major and three minor criteria.",
        "D. Four minor criteria."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "A definitive clinical diagnosis of infective endocarditis is made if a patient meets two major criteria, OR one major and three minor criteria, OR five minor criteria. (Page 145)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Basic", "Page 145"]
    },
    {
      "id": 253,
      "question": "A patient being treated for streptococcal endocarditis develops a new, prolonged PR interval on their ECG. This finding is most concerning for which complication?",
      "choices": [
        "A. Myocardial infarction",
        "B. Pericarditis",
        "C. Perivalvular abscess formation",
        "D. Pulmonary embolism"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The development of a new AV block (such as a prolonged PR interval) in a patient with endocarditis is a critical finding. It suggests that the infection has extended from the valve into the adjacent conduction tissue, forming a perivalvular abscess. This is an indication for urgent surgical consultation. (Page 144, implied under complications/surgical indications)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 144"]
    },
    {
      "id": 254,
      "question": "What is the recommended empiric antibiotic regimen for a hemodynamically stable patient with suspected native valve endocarditis while awaiting culture results?",
      "choices": [
        "A. Vancomycin plus Gentamicin",
        "B. Ampicillin/Sulbactam plus Gentamicin",
        "C. Ceftriaxone plus Vancomycin",
        "D. Penicillin G plus Gentamicin"
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The STG recommends an empiric regimen for stable native valve IE that covers the most likely pathogens (Staphylococci, Streptococci, and Enterococci). The combination of Ampicillin/Sulbactam plus Gentamicin provides this broad coverage. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 146"]
    },
    {
      "id": 255,
      "question": "Which of the following is considered a vascular phenomenon in the minor criteria for infective endocarditis?",
      "choices": [
        "A. Glomerulonephritis",
        "B. Osler's nodes",
        "C. Roth spots",
        "D. Systemic arterial emboli"
      ],
      "correctAnswer": 3,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Vascular phenomena are one of the categories of minor criteria. This category includes major arterial emboli, septic pulmonary infarcts, mycotic aneurysm, intracranial hemorrhage, conjunctival hemorrhages, and Janeway lesions. Immunologic phenomena (glomerulonephritis, Osler's nodes, Roth spots) are a separate minor criterion. (Page 145)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 145"]
    },
    {
      "id": 256,
      "question": "A patient with a prosthetic mitral valve requires a dental extraction. According to the STG, what is the standard antibiotic prophylaxis regimen for this high-risk patient if they have no penicillin allergy?",
      "choices": [
        "A. Amoxicillin 2g orally, 30-60 minutes before the procedure.",
        "B. Clindamycin 600 mg orally, 30-60 minutes before the procedure.",
        "C. Azithromycin 500 mg orally, 30-60 minutes before the procedure.",
        "D. No prophylaxis is needed."
      ],
      "correctAnswer": 0,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "A prosthetic heart valve is a high-risk cardiac condition requiring antibiotic prophylaxis before dental procedures that involve manipulation of gingival tissue. The standard oral regimen for patients who can take penicillin is a single 2g dose of Amoxicillin. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 147"]
    },
    {
      "id": 257,
      "question": "Osler's nodes, a sign of infective endocarditis, are best described as:",
      "choices": [
        "A. Painless, erythematous macules on the palms and soles.",
        "B. Tender, violaceous nodules on the pads of the fingers and toes.",
        "C. Linear hemorrhages under the nail beds.",
        "D. Retinal hemorrhages with pale centers."
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Osler's nodes are tender subcutaneous nodules, typically found on the distal pads of the fingers or toes. They are considered an immunologic phenomenon, resulting from the deposition of immune complexes in the microvasculature. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 143"]
    },
    {
      "id": 258,
      "question": "What is the recommended duration of antibiotic therapy for uncomplicated native valve endocarditis caused by a highly penicillin-sensitive Viridans group streptococcus?",
      "choices": [
        "A. 2 weeks",
        "B. 4 weeks",
        "C. 6 weeks",
        "D. 8 weeks"
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "For native valve endocarditis caused by highly susceptible streptococci, a standard duration of therapy is 4 weeks of an appropriate parenteral antibiotic, such as Penicillin G or Ceftriaxone. A shorter 2-week course may be considered in some cases if combined with Gentamicin. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 146"]
    },
    {
      "id": 259,
      "question": "A patient with infective endocarditis develops acute heart failure secondary to severe aortic regurgitation. What is the most appropriate management step?",
      "choices": [
        "A. Continue medical therapy with increased doses of diuretics.",
        "B. Add an oral ACE inhibitor to reduce afterload.",
        "C. An urgent consultation with a cardiothoracic surgeon for valve replacement.",
        "D. Switch to a broader-spectrum antibiotic regimen."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The development of moderate to severe heart failure due to valve dysfunction is a primary indication for early surgery in infective endocarditis. Medical therapy alone is often insufficient, and surgical intervention to replace the damaged valve is necessary to prevent irreversible hemodynamic collapse and death. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 147"]
    },
    {
      "id": 260,
      "question": "Which of the following is NOT a high-risk cardiac condition requiring endocarditis prophylaxis before dental procedures?",
      "choices": [
        "A. Prosthetic heart valve",
        "B. Previous history of infective endocarditis",
        "C. Mitral valve prolapse with mild regurgitation",
        "D. Unrepaired cyanotic congenital heart disease"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Prophylaxis guidelines have been narrowed to include only the highest-risk patients. Mitral valve prolapse, even with regurgitation, is no longer considered a condition that routinely requires antibiotic prophylaxis. The other options are all considered high-risk conditions. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 147"]
    },
    {
      "id": 261,
      "question": "A patient with culture-negative endocarditis is suspected of being infected with a HACEK group organism. What does the 'H' in HACEK stand for?",
      "choices": [
        "A. Haemophilus",
        "B. Helicobacter",
        "C. Human T-lymphotropic virus",
        "D. Histoplasma"
      ],
      "correctAnswer": 0,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The HACEK group is an acronym for a group of fastidious gram-negative bacteria that are a cause of culture-negative endocarditis. The 'H' stands for Haemophilus species. The other letters stand for Aggregatibacter, Cardiobacterium, Eikenella, and Kingella. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Basic", "Page 143"]
    },
    {
      "id": 262,
      "question": "A patient with endocarditis is found to have painless, erythematous macules on their palms and soles. What is the name of this physical finding?",
      "choices": [
        "A. Osler's nodes",
        "B. Roth spots",
        "C. Janeway lesions",
        "D. Splinter hemorrhages"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Janeway lesions are non-tender, erythematous, and macular or nodular lesions, typically found on the palms and soles. They are considered a vascular phenomenon, caused by septic microemboli from the valve vegetation. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 143"]
    },
    {
      "id": 263,
      "question": "A patient with a history of rheumatic heart disease undergoes a transesophageal echocardiogram (TEE) for suspected endocarditis. Which finding would be more clearly visualized on TEE compared to a transthoracic echocardiogram (TTE)?",
      "choices": [
        "A. The size of the left ventricle.",
        "B. The overall left ventricular ejection fraction.",
        "C. A small vegetation on a prosthetic mitral valve.",
        "D. The presence of a large pericardial effusion."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Transesophageal echocardiography (TEE) provides superior imaging of posterior cardiac structures, including the mitral valve. It is more sensitive than TTE for detecting small vegetations, especially on prosthetic valves, and for identifying complications like abscesses or valve perforation. (Page 144)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 144"]
    },
    {
      "id": 264,
      "question": "What is the recommended empiric antibiotic regimen for a critically ill patient with suspected early prosthetic valve endocarditis?",
      "choices": [
        "A. Vancomycin + Gentamicin + Cefepime",
        "B. Penicillin G + Gentamicin",
        "C. Ceftriaxone + Metronidazole",
        "D. Ampicillin + Clindamycin"
      ],
      "correctAnswer": 0,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Early PVE in a critically ill patient requires broad-spectrum coverage for resistant nosocomial organisms, including MRSA, coagulase-negative staph, and gram-negative rods. The STG recommends a three-drug regimen of Vancomycin (for MRSA/MRSE), Gentamicin (for synergy), and a broad-spectrum anti-pseudomonal beta-lactam like Cefepime. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 146"]
    },
    {
      "id": 265,
      "question": "Which of the following procedures requires antibiotic prophylaxis for the prevention of infective endocarditis in a high-risk patient?",
      "choices": [
        "A. Placement of a peripheral intravenous line.",
        "B. A routine upper gastrointestinal endoscopy without biopsy.",
        "C. Incision and drainage of a cutaneous abscess.",
        "D. A dental procedure involving perforation of the oral mucosa."
      ],
      "correctAnswer": 3,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Prophylaxis is recommended for high-risk patients undergoing procedures that are associated with a high risk of bacteremia. This includes all dental procedures that involve manipulation of gingival tissue or the periapical region of teeth or perforation of the oral mucosa. The other listed procedures are not indications for prophylaxis. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 147"]
    },
    {
      "id": 266,
      "question": "A patient with native valve endocarditis has persistently positive blood cultures after one week of appropriate antibiotic therapy. This is an indication for:",
      "choices": [
        "A. Discontinuing all antibiotics.",
        "B. Adding an oral antibiotic to the regimen.",
        "C. Considering surgical intervention.",
        "D. Extending the duration of IV therapy to 12 weeks."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Persistently positive blood cultures despite adequate antibiotic therapy suggest that the infection is uncontrolled. This may be due to a large, protected vegetation, an abscess, or a highly resistant organism. It is a major indication that medical therapy is failing and that surgical debridement and valve replacement may be necessary. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 147"]
    },
    {
      "id": 267,
      "question": "A patient is diagnosed with endocarditis caused by Enterococcus faecalis. Why is combination therapy with a cell wall agent (like Penicillin or Ampicillin) and an aminoglycoside (like Gentamicin) often recommended?",
      "choices": [
        "A. To prevent the development of a rash.",
        "B. To achieve a synergistic bactericidal effect.",
        "C. To reduce the risk of nephrotoxicity.",
        "D. To shorten the duration of therapy to one week."
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Enterococci are relatively resistant to the bactericidal action of cell wall agents alone. The addition of an aminoglycoside allows the cell wall agent to penetrate the bacterium more effectively, leading to a synergistic bactericidal effect that is necessary to sterilize the vegetation and cure the infection. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 146"]
    },
    {
      "id": 268,
      "question": "In a patient with suspected endocarditis, the presence of glomerulonephritis would be classified as which type of Duke minor criterion?",
      "choices": [
        "A. Vascular phenomenon",
        "B. Microbiological evidence",
        "C. Immunologic phenomenon",
        "D. Predisposing heart condition"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Glomerulonephritis in the setting of IE is caused by the deposition of immune complexes in the renal glomeruli. Therefore, it is classified as an immunologic phenomenon, along with Osler's nodes, Roth spots, and a positive rheumatoid factor. (Page 145)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 145"]
    },
    {
      "id": 269,
      "question": "For endocarditis prophylaxis in a high-risk patient with a severe, anaphylactic allergy to penicillin, what is the recommended oral medication?",
      "choices": [
        "A. Cephalexin 2g",
        "B. Vancomycin 1g IV",
        "C. Clindamycin 600 mg",
        "D. Amoxicillin 2g"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "In patients with a severe penicillin allergy, cephalosporins should be avoided due to potential cross-reactivity. The recommended oral alternative is Clindamycin 600 mg, given 30-60 minutes before the procedure. Vancomycin is an IV alternative. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 147"]
    },
    {
      "id": 270,
      "question": "What is the most common portal of entry for Viridans group streptococci causing native valve endocarditis?",
      "choices": [
        "A. The gastrointestinal tract",
        "B. The genitourinary tract",
        "C. The skin",
        "D. The oral cavity"
      ],
      "correctAnswer": 3,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Viridans group streptococci are normal commensal flora of the human oral cavity. Transient bacteremia commonly occurs after dental procedures or even with routine daily activities like brushing teeth, providing an opportunity for these organisms to seed damaged or abnormal heart valves. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Basic", "Page 143"]
    },
    {
      "id": 271,
      "question": "A patient with infective endocarditis suddenly develops right-sided weakness and aphasia. This complication is most likely due to:",
      "choices": [
        "A. A mycotic aneurysm rupture.",
        "B. A septic embolus to the brain.",
        "C. An intracranial abscess.",
        "D. A medication side effect."
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Neurologic complications are common and serious in IE. The most frequent cause is a septic embolus, where a piece of the vegetation breaks off, travels through the arterial circulation, and lodges in a cerebral artery, causing an ischemic stroke with focal neurologic deficits. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 143"]
    },
    {
      "id": 272,
      "question": "The primary reason to obtain multiple blood cultures from different sites over a period of time in suspected endocarditis is to:",
      "choices": [
        "A. Increase the total volume of blood cultured.",
        "B. Isolate different organisms from different parts of the body.",
        "C. Differentiate a continuous bacteremia from a transient, contaminant bacteremia.",
        "D. Speed up the time it takes to get a positive result."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Infective endocarditis causes a continuous, low-grade bacteremia as organisms are constantly shed from the vegetation. Obtaining multiple positive cultures over time with the same organism confirms this continuous bacteremia and makes it highly unlikely that the result is due to skin contamination during the blood draw. (Page 144)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 144"]
    },
    {
      "id": 273,
      "question": "Which of the following is a recognized risk factor for developing infective endocarditis?",
      "choices": [
        "A. Well-controlled hypertension",
        "B. Mitral valve prolapse without regurgitation",
        "C. Poor dental hygiene",
        "D. A history of asthma"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Poor dental hygiene and periodontal disease lead to chronic inflammation and frequent, low-grade bacteremia with oral organisms (like Viridans streptococci). This provides a frequent opportunity for bacteria to seed heart valves, making it a significant risk factor for IE. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Basic", "Page 143"]
    },
    {
      "id": 274,
      "question": "A patient is being treated for Staphylococcal prosthetic valve endocarditis. In addition to Vancomycin and Gentamicin, which third drug is recommended for the entire course of therapy to treat biofilm?",
      "choices": [
        "A. Metronidazole",
        "B. Doxycycline",
        "C. Rifampicin",
        "D. Ciprofloxacin"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Staphylococci on prosthetic material form a biofilm that is difficult for many antibiotics to penetrate. Rifampicin has excellent activity against these stationary-phase bacteria within the biofilm. It is recommended as part of a three-drug regimen for Staphylococcal PVE to improve cure rates. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 146"]
    },
    {
      "id": 275,
      "question": "A patient is diagnosed with endocarditis. Isolation of Streptococcus gallolyticus (bovis) from the blood should prompt an investigation for pathology in which organ system?",
      "choices": [
        "A. Genitourinary tract",
        "B. Central nervous system",
        "C. Respiratory tract",
        "D. Gastrointestinal tract"
      ],
      "correctAnswer": 3,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "There is a strong and well-established association between Streptococcus gallolyticus (bovis) bacteremia and endocarditis and underlying colonic pathology, particularly adenomatous polyps and colorectal cancer. Therefore, any patient with this infection requires a colonoscopy to rule out a GI malignancy. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 143"]
    },
    {
      "id": 276,
      "question": "What is the primary purpose of adding Gentamicin for the first two weeks to a Vancomycin regimen for treating Staphylococcal native valve endocarditis?",
      "choices": [
        "A. To provide coverage for gram-negative bacteria.",
        "B. To provide a synergistic and more rapid bactericidal effect.",
        "C. To prevent nephrotoxicity from the Vancomycin.",
        "D. To treat a potential anaerobic co-infection."
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The addition of an aminoglycoside like Gentamicin to a primary agent like Vancomycin or a beta-lactam is done to achieve synergy. This combination leads to a faster and more complete killing of the bacteria on the valve vegetation than either agent alone, which can be particularly important in severe infections. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 146"]
    },{
      "id": 277,
      "question": "A 30-year-old intravenous drug user presents with a high fever, chills, and malaise for one week. On examination, there are splinter hemorrhages under his fingernails and a new, holosystolic murmur loudest at the left lower sternal border that increases with inspiration. Which of the following is the most likely diagnosis?",
      "choices": [
        "A. Acute rheumatic fever",
        "B. Septic arthritis",
        "C. Infective endocarditis",
        "D. Systemic lupus erythematosus"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The combination of fever, constitutional symptoms, a new heart murmur, and peripheral stigmata (like splinter hemorrhages) in a patient with a major risk factor (IV drug use) is highly suggestive of infective endocarditis. The murmur's characteristics suggest tricuspid regurgitation, common in IV drug users. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 143"]
    },
    {
      "id": 278,
      "question": "According to the modified Duke criteria, which of the following is considered a major criterion for the diagnosis of infective endocarditis?",
      "choices": [
        "A. Fever > 38.0°C",
        "B. A single positive blood culture for a non-typical organism.",
        "C. Echocardiographic evidence of an oscillating intracardiac mass on a valve (vegetation).",
        "D. Presence of Roth spots on fundoscopy."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The modified Duke criteria have two major criteria: 1) Positive blood cultures for typical organisms, and 2) Evidence of endocardial involvement, which includes positive echocardiogram findings (vegetation, abscess, or new valve regurgitation). Fever and vascular phenomena like Roth spots are minor criteria. (Page 144)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 144"]
    },
    {
      "id": 279,
      "question": "What is the most common causative organism of infective endocarditis in patients with a prosthetic heart valve within the first two months after surgery (early PVE)?",
      "choices": [
        "A. Viridans group streptococci",
        "B. Staphylococcus aureus",
        "C. Coagulase-negative staphylococci (e.g., S. epidermidis)",
        "D. Enterococcus faecalis"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Early prosthetic valve endocarditis (within 2 months of surgery) is most often caused by nosocomial organisms introduced during the perioperative period. Coagulase-negative staphylococci, particularly Staphylococcus epidermidis, are the most frequent pathogens. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 146"]
    },
    {
      "id": 280,
      "question": "A patient with suspected infective endocarditis has three sets of blood cultures drawn over 24 hours. All three are positive for Streptococcus gallolyticus (formerly S. bovis). This bacteriological finding satisfies which of the Duke criteria?",
      "choices": [
        "A. One major criterion",
        "B. One minor criterion",
        "C. Two minor criteria",
        "D. It does not satisfy any criterion."
      ],
      "correctAnswer": 0,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Persistently positive blood cultures with a typical microorganism for infective endocarditis is a major Duke criterion. Streptococcus gallolyticus is considered a typical organism, and having multiple positive cultures meets this criterion. (Page 144)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 144"]
    },
    {
      "id": 281,
      "question": "Which of the following is the most common causative organism in native valve endocarditis in a patient who is an intravenous drug user?",
      "choices": [
        "A. Streptococcus pneumoniae",
        "B. Staphylococcus aureus",
        "C. Pseudomonas aeruginosa",
        "D. Candida albicans"
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "While various organisms can cause IE in IV drug users, Staphylococcus aureus is by far the most common pathogen. It is often introduced from the skin flora during injections and has a predilection for affecting the tricuspid valve. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 146"]
    },
    {
      "id": 282,
      "question": "A definitive diagnosis of infective endocarditis by the modified Duke criteria can be made with which of the following combinations?",
      "choices": [
        "A. One major and one minor criterion.",
        "B. Two minor criteria.",
        "C. One major and three minor criteria.",
        "D. Four minor criteria."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "A definitive clinical diagnosis of infective endocarditis is made if a patient meets two major criteria, OR one major and three minor criteria, OR five minor criteria. (Page 145)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Basic", "Page 145"]
    },
    {
      "id": 283,
      "question": "A patient being treated for streptococcal endocarditis develops a new, prolonged PR interval on their ECG. This finding is most concerning for which complication?",
      "choices": [
        "A. Myocardial infarction",
        "B. Pericarditis",
        "C. Perivalvular abscess formation",
        "D. Pulmonary embolism"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The development of a new AV block (such as a prolonged PR interval) in a patient with endocarditis is a critical finding. It suggests that the infection has extended from the valve into the adjacent conduction tissue, forming a perivalvular abscess. This is an indication for urgent surgical consultation. (Page 144, implied under complications/surgical indications)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 144"]
    },
    {
      "id": 284,
      "question": "What is the recommended empiric antibiotic regimen for a hemodynamically stable patient with suspected native valve endocarditis while awaiting culture results?",
      "choices": [
        "A. Vancomycin plus Gentamicin",
        "B. Ampicillin/Sulbactam plus Gentamicin",
        "C. Ceftriaxone plus Vancomycin",
        "D. Penicillin G plus Gentamicin"
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The STG recommends an empiric regimen for stable native valve IE that covers the most likely pathogens (Staphylococci, Streptococci, and Enterococci). The combination of Ampicillin/Sulbactam plus Gentamicin provides this broad coverage. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 146"]
    },
    {
      "id": 285,
      "question": "Which of the following is considered a vascular phenomenon in the minor criteria for infective endocarditis?",
      "choices": [
        "A. Glomerulonephritis",
        "B. Osler's nodes",
        "C. Roth spots",
        "D. Systemic arterial emboli"
      ],
      "correctAnswer": 3,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Vascular phenomena are one of the categories of minor criteria. This category includes major arterial emboli, septic pulmonary infarcts, mycotic aneurysm, intracranial hemorrhage, conjunctival hemorrhages, and Janeway lesions. Immunologic phenomena (glomerulonephritis, Osler's nodes, Roth spots) are a separate minor criterion. (Page 145)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 145"]
    },
    {
      "id": 286,
      "question": "A patient with a prosthetic mitral valve requires a dental extraction. According to the STG, what is the standard antibiotic prophylaxis regimen for this high-risk patient if they have no penicillin allergy?",
      "choices": [
        "A. Amoxicillin 2g orally, 30-60 minutes before the procedure.",
        "B. Clindamycin 600 mg orally, 30-60 minutes before the procedure.",
        "C. Azithromycin 500 mg orally, 30-60 minutes before the procedure.",
        "D. No prophylaxis is needed."
      ],
      "correctAnswer": 0,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "A prosthetic heart valve is a high-risk cardiac condition requiring antibiotic prophylaxis before dental procedures that involve manipulation of gingival tissue. The standard oral regimen for patients who can take penicillin is a single 2g dose of Amoxicillin. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 147"]
    },
    {
      "id": 287,
      "question": "Osler's nodes, a sign of infective endocarditis, are best described as:",
      "choices": [
        "A. Painless, erythematous macules on the palms and soles.",
        "B. Tender, violaceous nodules on the pads of the fingers and toes.",
        "C. Linear hemorrhages under the nail beds.",
        "D. Retinal hemorrhages with pale centers."
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Osler's nodes are tender subcutaneous nodules, typically found on the distal pads of the fingers or toes. They are considered an immunologic phenomenon, resulting from the deposition of immune complexes in the microvasculature. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 143"]
    },
    {
      "id": 288,
      "question": "What is the recommended duration of antibiotic therapy for uncomplicated native valve endocarditis caused by a highly penicillin-sensitive Viridans group streptococcus?",
      "choices": [
        "A. 2 weeks",
        "B. 4 weeks",
        "C. 6 weeks",
        "D. 8 weeks"
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "For native valve endocarditis caused by highly susceptible streptococci, a standard duration of therapy is 4 weeks of an appropriate parenteral antibiotic, such as Penicillin G or Ceftriaxone. A shorter 2-week course may be considered in some cases if combined with Gentamicin. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 146"]
    },
    {
      "id": 289,
      "question": "A patient with infective endocarditis develops acute heart failure secondary to severe aortic regurgitation. What is the most appropriate management step?",
      "choices": [
        "A. Continue medical therapy with increased doses of diuretics.",
        "B. Add an oral ACE inhibitor to reduce afterload.",
        "C. An urgent consultation with a cardiothoracic surgeon for valve replacement.",
        "D. Switch to a broader-spectrum antibiotic regimen."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The development of moderate to severe heart failure due to valve dysfunction is a primary indication for early surgery in infective endocarditis. Medical therapy alone is often insufficient, and surgical intervention to replace the damaged valve is necessary to prevent irreversible hemodynamic collapse and death. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 147"]
    },
    {
      "id": 290,
      "question": "Which of the following is NOT a high-risk cardiac condition requiring endocarditis prophylaxis before dental procedures?",
      "choices": [
        "A. Prosthetic heart valve",
        "B. Previous history of infective endocarditis",
        "C. Mitral valve prolapse with mild regurgitation",
        "D. Unrepaired cyanotic congenital heart disease"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Prophylaxis guidelines have been narrowed to include only the highest-risk patients. Mitral valve prolapse, even with regurgitation, is no longer considered a condition that routinely requires antibiotic prophylaxis. The other options are all considered high-risk conditions. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 147"]
    },
    {
          "id": 291,
      "question": "A patient with culture-negative endocarditis is suspected of being infected with a HACEK group organism. What does the 'H' in HACEK stand for?",
      "choices": [
        "A. Haemophilus",
        "B. Helicobacter",
        "C. Human T-lymphotropic virus",
        "D. Histoplasma"
      ],
      "correctAnswer": 0,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The HACEK group is an acronym for a group of fastidious gram-negative bacteria that are a cause of culture-negative endocarditis. The 'H' stands for Haemophilus species. The other letters stand for Aggregatibacter, Cardiobacterium, Eikenella, and Kingella. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Basic", "Page 143"]
    },
    {
      "id": 292,
      "question": "A patient with endocarditis is found to have painless, erythematous macules on their palms and soles. What is the name of this physical finding?",
      "choices": [
        "A. Osler's nodes",
        "B. Roth spots",
        "C. Janeway lesions",
        "D. Splinter hemorrhages"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Janeway lesions are non-tender, erythematous, and macular or nodular lesions, typically found on the palms and soles. They are considered a vascular phenomenon, caused by septic microemboli from the valve vegetation. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 143"]
    },
    {
      "id": 293,
      "question": "A patient with a history of rheumatic heart disease undergoes a transesophageal echocardiogram (TEE) for suspected endocarditis. Which finding would be more clearly visualized on TEE compared to a transthoracic echocardiogram (TTE)?",
      "choices": [
        "A. The size of the left ventricle.",
        "B. The overall left ventricular ejection fraction.",
        "C. A small vegetation on a prosthetic mitral valve.",
        "D. The presence of a large pericardial effusion."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Transesophageal echocardiography (TEE) provides superior imaging of posterior cardiac structures, including the mitral valve. It is more sensitive than TTE for detecting small vegetations, especially on prosthetic valves, and for identifying complications like abscesses or valve perforation. (Page 144)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 144"]
    },
    {
      "id": 294,
      "question": "What is the recommended empiric antibiotic regimen for a critically ill patient with suspected early prosthetic valve endocarditis?",
      "choices": [
        "A. Vancomycin + Gentamicin + Cefepime",
        "B. Penicillin G + Gentamicin",
        "C. Ceftriaxone + Metronidazole",
        "D. Ampicillin + Clindamycin"
      ],
      "correctAnswer": 0,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Early PVE in a critically ill patient requires broad-spectrum coverage for resistant nosocomial organisms, including MRSA, coagulase-negative staph, and gram-negative rods. The STG recommends a three-drug regimen of Vancomycin (for MRSA/MRSE), Gentamicin (for synergy), and a broad-spectrum anti-pseudomonal beta-lactam like Cefepime. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 146"]
    },
    {
      "id": 295,
      "question": "Which of the following procedures requires antibiotic prophylaxis for the prevention of infective endocarditis in a high-risk patient?",
      "choices": [
        "A. Placement of a peripheral intravenous line.",
        "B. A routine upper gastrointestinal endoscopy without biopsy.",
        "C. Incision and drainage of a cutaneous abscess.",
        "D. A dental procedure involving perforation of the oral mucosa."
      ],
      "correctAnswer": 3,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Prophylaxis is recommended for high-risk patients undergoing procedures that are associated with a high risk of bacteremia. This includes all dental procedures that involve manipulation of gingival tissue or the periapical region of teeth or perforation of the oral mucosa. The other listed procedures are not indications for prophylaxis. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 147"]
    },
    {
      "id": 296,
      "question": "A patient with native valve endocarditis has persistently positive blood cultures after one week of appropriate antibiotic therapy. This is an indication for:",
      "choices": [
        "A. Discontinuing all antibiotics.",
        "B. Adding an oral antibiotic to the regimen.",
        "C. Considering surgical intervention.",
        "D. Extending the duration of IV therapy to 12 weeks."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Persistently positive blood cultures despite adequate antibiotic therapy suggest that the infection is uncontrolled. This may be due to a large, protected vegetation, an abscess, or a highly resistant organism. It is a major indication that medical therapy is failing and that surgical debridement and valve replacement may be necessary. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 147"]
    },
    {
      "id": 297,
      "question": "A patient is diagnosed with endocarditis caused by Enterococcus faecalis. Why is combination therapy with a cell wall agent (like Penicillin or Ampicillin) and an aminoglycoside (like Gentamicin) often recommended?",
      "choices": [
        "A. To prevent the development of a rash.",
        "B. To achieve a synergistic bactericidal effect.",
        "C. To reduce the risk of nephrotoxicity.",
        "D. To shorten the duration of therapy to one week."
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Enterococci are relatively resistant to the bactericidal action of cell wall agents alone. The addition of an aminoglycoside allows the cell wall agent to penetrate the bacterium more effectively, leading to a synergistic bactericidal effect that is necessary to sterilize the vegetation and cure the infection. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 146"]
    },
    {
      "id": 298,
      "question": "In a patient with suspected endocarditis, the presence of glomerulonephritis would be classified as which type of Duke minor criterion?",
      "choices": [
        "A. Vascular phenomenon",
        "B. Microbiological evidence",
        "C. Immunologic phenomenon",
        "D. Predisposing heart condition"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Glomerulonephritis in the setting of IE is caused by the deposition of immune complexes in the renal glomeruli. Therefore, it is classified as an immunologic phenomenon, along with Osler's nodes, Roth spots, and a positive rheumatoid factor. (Page 145)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 145"]
    },
    {
      "id": 299,
      "question": "For endocarditis prophylaxis in a high-risk patient with a severe, anaphylactic allergy to penicillin, what is the recommended oral medication?",
      "choices": [
        "A. Cephalexin 2g",
        "B. Vancomycin 1g IV",
        "C. Clindamycin 600 mg",
        "D. Amoxicillin 2g"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "In patients with a severe penicillin allergy, cephalosporins should be avoided due to potential cross-reactivity. The recommended oral alternative is Clindamycin 600 mg, given 30-60 minutes before the procedure. Vancomycin is an IV alternative. (Page 147)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 147"]
    },
    {
      "id": 300,
      "question": "What is the most common portal of entry for Viridans group streptococci causing native valve endocarditis?",
      "choices": [
        "A. The gastrointestinal tract",
        "B. The genitourinary tract",
        "C. The skin",
        "D. The oral cavity"
      ],
      "correctAnswer": 3,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Viridans group streptococci are normal commensal flora of the human oral cavity. Transient bacteremia commonly occurs after dental procedures or even with routine daily activities like brushing teeth, providing an opportunity for these organisms to seed damaged or abnormal heart valves. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Basic", "Page 143"]
    },
    {
        "id": 301,
      "question": "A patient with infective endocarditis suddenly develops right-sided weakness and aphasia. This complication is most likely due to:",
      "choices": [
        "A. A mycotic aneurysm rupture.",
        "B. A septic embolus to the brain.",
        "C. An intracranial abscess.",
        "D. A medication side effect."
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Neurologic complications are common and serious in IE. The most frequent cause is a septic embolus, where a piece of the vegetation breaks off, travels through the arterial circulation, and lodges in a cerebral artery, causing an ischemic stroke with focal neurologic deficits. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 143"]
    },
    {
      "id": 302,
      "question": "The primary reason to obtain multiple blood cultures from different sites over a period of time in suspected endocarditis is to:",
      "choices": [
        "A. Increase the total volume of blood cultured.",
        "B. Isolate different organisms from different parts of the body.",
        "C. Differentiate a continuous bacteremia from a transient, contaminant bacteremia.",
        "D. Speed up the time it takes to get a positive result."
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Infective endocarditis causes a continuous, low-grade bacteremia as organisms are constantly shed from the vegetation. Obtaining multiple positive cultures over time with the same organism confirms this continuous bacteremia and makes it highly unlikely that the result is due to skin contamination during the blood draw. (Page 144)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 144"]
    },
    {
      "id": 303,
      "question": "Which of the following is a recognized risk factor for developing infective endocarditis?",
      "choices": [
        "A. Well-controlled hypertension",
        "B. Mitral valve prolapse without regurgitation",
        "C. Poor dental hygiene",
        "D. A history of asthma"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Poor dental hygiene and periodontal disease lead to chronic inflammation and frequent, low-grade bacteremia with oral organisms (like Viridans streptococci). This provides a frequent opportunity for bacteria to seed heart valves, making it a significant risk factor for IE. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Basic", "Page 143"]
    },
    {
      "id": 304,
      "question": "A patient is being treated for Staphylococcal prosthetic valve endocarditis. In addition to Vancomycin and Gentamicin, which third drug is recommended for the entire course of therapy to treat biofilm?",
      "choices": [
        "A. Metronidazole",
        "B. Doxycycline",
        "C. Rifampicin",
        "D. Ciprofloxacin"
      ],
      "correctAnswer": 2,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "Staphylococci on prosthetic material form a biofilm that is difficult for many antibiotics to penetrate. Rifampicin has excellent activity against these stationary-phase bacteria within the biofilm. It is recommended as part of a three-drug regimen for Staphylococcal PVE to improve cure rates. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 146"]
    },
    {
      "id": 305,
      "question": "A patient is diagnosed with endocarditis. Isolation of Streptococcus gallolyticus (bovis) from the blood should prompt an investigation for pathology in which organ system?",
      "choices": [
        "A. Genitourinary tract",
        "B. Central nervous system",
        "C. Respiratory tract",
        "D. Gastrointestinal tract"
      ],
      "correctAnswer": 3,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "There is a strong and well-established association between Streptococcus gallolyticus (bovis) bacteremia and endocarditis and underlying colonic pathology, particularly adenomatous polyps and colorectal cancer. Therefore, any patient with this infection requires a colonoscopy to rule out a GI malignancy. (Page 143)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Advanced", "Page 143"]
    },
    {
      "id": 306,
      "question": "What is the primary purpose of adding Gentamicin for the first two weeks to a Vancomycin regimen for treating Staphylococcal native valve endocarditis?",
      "choices": [
        "A. To provide coverage for gram-negative bacteria.",
        "B. To provide a synergistic and more rapid bactericidal effect.",
        "C. To prevent nephrotoxicity from the Vancomycin.",
        "D. To treat a potential anaerobic co-infection."
      ],
      "correctAnswer": 1,
      "topic": "CHAPTER 4: CARDIOVASCULAR DISORDERS / 4.7. INFECTIVE ENDOCARDITIS",
      "explanation": "The addition of an aminoglycoside like Gentamicin to a primary agent like Vancomycin or a beta-lactam is done to achieve synergy. This combination leads to a faster and more complete killing of the bacteria on the valve vegetation than either agent alone, which can be particularly important in severe infections. (Page 146)",
      "tags": ["Chapter 4", "Infective Endocarditis", "Intermediate", "Page 146"]
    }
            
        ]
    };
})();


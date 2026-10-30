<?php
/**
 * Scholarship Course Matching & Comprehensive Eligibility Engine
 * Sirib i-Sko — PGIN Scholarship Management System
 * 
 * Features:
 * - Canonical course alias dictionary with fuzzy/exact token resolution
 * - Domain-specific priority matching (Academic Tertiary, Health & Sciences, Agri-Fisheries,
 *   Doctor of Medicine, Juris Doctor, Tech-Voc, Arts)
 * - Comprehensive multi-factor evaluation (Course, Level, Year Level, GWA, Income Ceiling, School)
 * - findBestMatch() selector for automatic real-time recommendation and tracking
 */

class ScholarshipMatcher {

    /**
     * Standard canonical course alias dictionary
     * Maps normalized canonical identifiers to known variants, abbreviations, and program names.
     */
    public static function getCourseAliases(): array {
        return [
            // Academic Tertiary / STEM / Computing
            'it' => [
                'bsit', 'bs it', 'bs in it', 'bachelor of science in information technology',
                'bachelor of science in information and technology', 'bachelor of science in information and communications technology',
                'bachelor in information technology', 'bachelor in information and technology',
                'information technology', 'information and technology', 'information and communications technology',
                'info tech', 'bs-it', 'b.s.i.t.', 'bs infotech', 'bs ict', 'ict', 'bs in info tech'
            ],
            'cs' => [
                'bscs', 'bs cs', 'bachelor of science in computer science',
                'computer science', 'compsci', 'bs-cs', 'b.s.c.s.'
            ],
            'is' => [
                'bsis', 'bs is', 'bachelor of science in information systems',
                'information systems', 'bs-is'
            ],
            'cpe' => [
                'bs computer engineering', 'bscpe', 'bs cpe', 'computer engineering',
                'bachelor of science in computer engineering', 'bs-cpe'
            ],
            'accountancy' => [
                'bs accountancy', 'bsa', 'bachelor of science in accountancy',
                'accountancy', 'accounting', 'bs accounting'
            ],
            'business_admin' => [
                'bs business administration', 'bsba', 'bs ba', 'bachelor of science in business administration',
                'business administration', 'marketing management', 'financial management', 'human resource management'
            ],
            'management_accounting' => [
                'bs management accounting', 'bsma', 'management accounting',
                'bachelor of science in management accounting'
            ],
            'secondary_educ' => [
                'bsed', 'bachelor of secondary education', 'secondary education',
                'b.s.ed.', 'bs education', 'bachelor in secondary education'
            ],
            'elem_educ' => [
                'beed', 'bachelor of elementary education', 'elementary education',
                'b.e.ed.', 'bachelor in elementary education'
            ],
            'communication' => [
                'ba communication', 'communication', 'bachelor of arts in communication',
                'mass communication', 'ba comm', 'communication arts'
            ],
            'hospitality' => [
                'bs hospitality management', 'bshm', 'bs hm', 'hospitality management',
                'hotel and restaurant management', 'hrm', 'bshrm'
            ],
            'tourism' => [
                'bs tourism management', 'bstm', 'bs tm', 'tourism management',
                'bachelor of science in tourism management', 'tourism'
            ],
            'civil_eng' => [
                'bs civil engineering', 'bsce', 'bs ce', 'civil engineering',
                'bachelor of science in civil engineering', 'bs-ce'
            ],
            'elec_eng' => [
                'bs electrical engineering', 'bsee', 'bs ee', 'electrical engineering',
                'bachelor of science in electrical engineering', 'bs-ee'
            ],
            'mech_eng' => [
                'bs mechanical engineering', 'bsme', 'bs me', 'mechanical engineering',
                'bachelor of science in mechanical engineering', 'bs-me'
            ],
            'chem_eng' => [
                'bs chemical engineering', 'bsche', 'chemical engineering',
                'bachelor of science in chemical engineering', 'bs-che'
            ],
            'ece' => [
                'bs electronics engineering', 'bsece', 'bs ece', 'electronics engineering',
                'electronics and communications engineering'
            ],
            'math' => [
                'bs math', 'bs mathematics', 'bachelor of science in mathematics',
                'mathematics', 'applied mathematics', 'bs applied mathematics'
            ],
            'criminology' => [
                'bs criminology', 'bscrim', 'criminology', 'bachelor of science in criminology'
            ],

            // Agriculture & Fisheries
            'agri' => [
                'bs agriculture', 'bs agri', 'bachelor of science in agriculture',
                'agriculture', 'agricultural sciences', 'crop science', 'animal science',
                'agronomy', 'horticulture', 'agri-fisheries'
            ],
            'fisheries' => [
                'bs fisheries', 'bs fisheries and aquatic sciences', 'bs fisheries science',
                'bachelor of science in fisheries', 'fisheries', 'aquaculture', 'bsfi', 'bs-fisheries'
            ],
            'agri_eng' => [
                'bsabe', 'bs agricultural and biosystems engineering', 'bs agricultural engineering',
                'agricultural engineering', 'agricultural and biosystems engineering', 'biosystems engineering'
            ],
            'agribusiness' => [
                'bs agribusiness', 'bs agribusiness management', 'agribusiness', 'agri-business', 'agricultural business'
            ],
            'forestry' => [
                'bs forestry', 'bachelor of science in forestry', 'forestry', 'agroforestry', 'bs agroforestry'
            ],
            'environmental' => [
                'bs environmental science', 'environmental science', 'bs environmental management'
            ],

            // Doctor of Medicine (MD)
            'medicine' => [
                'doctor of medicine', 'doctor of medicine (md)', 'doctor of medicine (m.d.)',
                'doctor of medicine program', 'md', 'm.d.', 'medical doctor', 'medical student'
            ],

            // Health & Medical Sciences (SCH-109)
            'dental' => [
                'doctor of dental medicine', 'doctor of dental medicine (dmd)', 'dmd', 'dental medicine', 'dentistry', 'dental'
            ],
            'nursing' => [
                'bs nursing', 'bsn', 'bs n', 'bachelor of science in nursing', 'nursing'
            ],
            'medtech' => [
                'bs medical technology', 'bs medtech', 'bs medical laboratory science',
                'bsmls', 'medical technology', 'medical laboratory science'
            ],
            'pharmacy' => [
                'bs pharmacy', 'bsp', 'bachelor of science in pharmacy', 'pharmacy'
            ],
            'physical_therapy' => [
                'bs physical therapy', 'bspt', 'physical therapy', 'physiotherapy'
            ],
            'radtech' => [
                'bs radiologic technology', 'bsrt', 'radiologic technology', 'radtech'
            ],
            'respiratory' => [
                'bs respiratory therapy', 'bs respiratory care', 'respiratory therapy'
            ],
            'occupational_therapy' => [
                'bs occupational therapy', 'bsot', 'occupational therapy'
            ],
            'psychology' => [
                'bs psychology', 'ab psychology', 'psychology', 'bs psych', 'bachelor of science in psychology'
            ],
            'veterinary' => [
                'doctor of veterinary medicine', 'doctor of veterinary medicine (dvm)', 'dvm', 'veterinary medicine', 'vet med', 'veterinary'
            ],
            'public_health' => [
                'bs public health', 'public health'
            ],
            'nutrition' => [
                'bs nutrition and dietetics', 'nutrition and dietetics', 'bsnd', 'nutrition'
            ],
            'biology' => [
                'bs biology', 'bachelor of science in biology', 'biology'
            ],
            'midwifery' => [
                'bs midwifery', 'midwifery', 'diploma in midwifery'
            ],

            // Law / Juris Doctor
            'law' => [
                'juris doctor', 'juris doctor (jd)', 'jd', 'law', 'bachelor of laws', 'llb', 'law student'
            ],

            // Technical-Vocational
            'techvoc' => [
                'techvoc', 'tvet', 'technical vocational', 'automotive servicing',
                'electrical installation and maintenance', 'eim', 'electrical installation',
                'electronics products assembly and servicing', 'epas', 'shielded metal arc welding',
                'smaw', 'welding', 'plumbing', 'cookery', 'bread and pastry production', 'bread and pastry',
                'food and beverage services', 'food & beverage services', 'fbs', 'housekeeping',
                'computer systems servicing', 'css', 'programming', 'tesda', 'tesda national certificate',
                'driving', 'agricultural crops production', 'animal production'
            ],

            // Expressive Arts
            'arts' => [
                'visual arts', 'music', 'dance', 'drama and theater', 'theater arts',
                'creative writing', 'fine arts', 'performing arts', 'bachelor of fine arts',
                'music arts', 'dance arts', 'drama', 'arts and design'
            ],

            // Senior High School Tracks & Strands
            'tvl_agri' => [
                'tvl track – agriculture and fisheries', 'tvl track - agriculture and fisheries',
                'tvl agriculture', 'tvl agri-fisheries', 'agriculture and fishery arts',
                'agri-fisheries tvl', 'agricultural crop production'
            ],
            'arts_shs' => [
                'arts and design track', 'arts track', 'arts strand'
            ],
            'stem_shs' => [
                'stem', 'stem strand', 'science, technology, engineering, and mathematics'
            ],
            'abm_shs' => [
                'abm', 'abm strand', 'accountancy, business and management'
            ],
            'humss_shs' => [
                'humss', 'humss strand', 'humanities and social sciences'
            ],
            'gas_shs' => [
                'gas', 'gas strand', 'general academic strand'
            ]
        ];
    }

    /**
     * Clean and normalize a course string
     */
    public static function normalize(string $str): string {
        $str = mb_strtolower(trim($str), 'UTF-8');
        // Replace en-dash/em-dash with standard hyphen
        $str = str_replace(['–', '—'], '-', $str);
        // Normalize ampersand to 'and'
        $str = str_replace('&', ' and ', $str);
        // Remove periods, commas, colons and punctuation, keeping spaces
        $str = str_replace(['.', ',', '(', ')', '[', ']', '/', '\\', ':', ';'], ' ', $str);
        // Normalize multiple spaces
        $str = preg_replace('/\s+/', ' ', $str);
        return trim($str);
    }

    /**
     * Identify canonical keys that match a normalized course name
     */
    public static function getCanonicalKeys(string $course): array {
        $norm = self::normalize($course);
        if ($norm === '') {
            return [];
        }

        $matchedKeys = [];
        $aliases = self::getCourseAliases();

        $isDentalOrVet = str_contains($norm, 'dental') || str_contains($norm, 'dentistry') ||
                         str_contains($norm, 'veterinary') || str_contains($norm, 'vet med');

        foreach ($aliases as $key => $variants) {
            // Prevent dental/veterinary medicine from triggering the 'medicine' canonical key
            if ($key === 'medicine' && $isDentalOrVet) {
                continue;
            }

            foreach ($variants as $variant) {
                $normVariant = self::normalize($variant);
                if ($norm === $normVariant) {
                    $matchedKeys[] = $key;
                    break;
                }
                // Check exact word token boundary match to prevent partial-substring false positives
                $pattern = '/\b' . preg_quote($normVariant, '/') . '\b/i';
                if (preg_match($pattern, $norm)) {
                    $matchedKeys[] = $key;
                    break;
                }
            }
        }

        // Token and phrase based fuzzy extraction for robust matching across variants
        if ((preg_match('/\binformation\b/i', $norm) && preg_match('/\b(tech|technology)\b/i', $norm)) || preg_match('/\b(bsit|ict)\b/i', $norm)) {
            $matchedKeys[] = 'it';
        }
        if ((preg_match('/\bcomputer\b/i', $norm) && preg_match('/\bscience\b/i', $norm)) || preg_match('/\bbscs\b/i', $norm)) {
            $matchedKeys[] = 'cs';
        }
        if ((preg_match('/\bcomputer\b/i', $norm) && preg_match('/\bengineering\b/i', $norm)) || preg_match('/\bbscpe\b/i', $norm)) {
            $matchedKeys[] = 'cpe';
        }
        if ((preg_match('/\binformation\b/i', $norm) && preg_match('/\bsystems\b/i', $norm)) || preg_match('/\bbsis\b/i', $norm)) {
            $matchedKeys[] = 'is';
        }
        if ((preg_match('/\bcivil\b/i', $norm) && preg_match('/\bengineering\b/i', $norm)) || preg_match('/\bbsce\b/i', $norm)) {
            $matchedKeys[] = 'civil_eng';
        }
        if ((preg_match('/\belectrical\b/i', $norm) && preg_match('/\bengineering\b/i', $norm)) || preg_match('/\bbsee\b/i', $norm)) {
            $matchedKeys[] = 'elec_eng';
        }
        if ((preg_match('/\bmechanical\b/i', $norm) && preg_match('/\bengineering\b/i', $norm)) || preg_match('/\bbsme\b/i', $norm)) {
            $matchedKeys[] = 'mech_eng';
        }
        if ((preg_match('/\bchemical\b/i', $norm) && preg_match('/\bengineering\b/i', $norm)) || preg_match('/\bbsche\b/i', $norm)) {
            $matchedKeys[] = 'chem_eng';
        }
        if ((preg_match('/\belectronics\b/i', $norm) && preg_match('/\bengineering\b/i', $norm)) || preg_match('/\bbsece\b/i', $norm)) {
            $matchedKeys[] = 'ece';
        }
        if (preg_match('/\b(biosystems|agricultural engineering)\b/i', $norm) || preg_match('/\bbsabe\b/i', $norm)) {
            $matchedKeys[] = 'agri_eng';
        }
        if (preg_match('/\b(accountancy|accounting)\b/i', $norm) || preg_match('/\b(bsa|bsma)\b/i', $norm)) {
            $matchedKeys[] = 'accountancy';
        }
        if ((preg_match('/\bbusiness\b/i', $norm) && preg_match('/\b(administration|admin|management)\b/i', $norm)) || preg_match('/\bbsba\b/i', $norm)) {
            $matchedKeys[] = 'business_admin';
        }
        if (preg_match('/\b(hotel|hospitality)\b/i', $norm) || preg_match('/\b(bshm|bshrm)\b/i', $norm)) {
            $matchedKeys[] = 'hospitality';
        }
        if (preg_match('/\btourism\b/i', $norm) || preg_match('/\bbstm\b/i', $norm)) {
            $matchedKeys[] = 'tourism';
        }
        if (preg_match('/\bsecondary educ/i', $norm) || preg_match('/\bbsed\b/i', $norm)) {
            $matchedKeys[] = 'secondary_educ';
        }
        if (preg_match('/\belementary educ/i', $norm) || preg_match('/\bbeed\b/i', $norm)) {
            $matchedKeys[] = 'elem_educ';
        }
        if (preg_match('/\bcriminology\b/i', $norm) || preg_match('/\bbscrim\b/i', $norm)) {
            $matchedKeys[] = 'criminology';
        }
        if (preg_match('/\bcommunication\b|\bmass comm/i', $norm)) {
            $matchedKeys[] = 'communication';
        }
        if (preg_match('/\bpsychology\b/i', $norm)) {
            $matchedKeys[] = 'psychology';
        }
        if (preg_match('/\b(mathematics|applied math)\b/i', $norm)) {
            $matchedKeys[] = 'math';
        }
        if (preg_match('/\bnursing\b/i', $norm) || preg_match('/\bbsn\b/i', $norm)) {
            $matchedKeys[] = 'nursing';
        }
        if (preg_match('/\bpharmacy\b/i', $norm) || preg_match('/\bbsp\b/i', $norm)) {
            $matchedKeys[] = 'pharmacy';
        }
        if (preg_match('/\bmedical (technology|laboratory)\b/i', $norm) || preg_match('/\b(medtech|bsmls)\b/i', $norm)) {
            $matchedKeys[] = 'medtech';
        }
        if (preg_match('/\bphysical therapy\b|\bbspt\b/i', $norm)) {
            $matchedKeys[] = 'physical_therapy';
        }
        if (preg_match('/\bradiologic technology\b|\bbsrt\b|\bradtech\b/i', $norm)) {
            $matchedKeys[] = 'radtech';
        }
        if (preg_match('/\bdental\b|\bdentistry\b|\bdmd\b/i', $norm)) {
            $matchedKeys[] = 'dental';
        }
        if (preg_match('/\bveterinary\b|\bdvm\b|\bvet med\b/i', $norm)) {
            $matchedKeys[] = 'veterinary';
        }
        if (preg_match('/\b(agriculture|agricultural|agronomy|crop science|animal science)\b/i', $norm) && !str_contains($norm, 'engineering') && !str_contains($norm, 'crop production') && !str_contains($norm, 'tvl')) {
            $matchedKeys[] = 'agri';
        }
        if (preg_match('/\b(fisheries|aquaculture)\b/i', $norm)) {
            $matchedKeys[] = 'fisheries';
        }
        if (preg_match('/\bagribusiness\b/i', $norm)) {
            $matchedKeys[] = 'agribusiness';
        }
        if (preg_match('/\bforestry\b|\bagroforestry\b/i', $norm)) {
            $matchedKeys[] = 'forestry';
        }
        if (preg_match('/\benvironmental science\b/i', $norm)) {
            $matchedKeys[] = 'environmental';
        }
        if ((preg_match('/\bdoctor of medicine\b|\bdoctor in medicine\b/i', $norm) || (preg_match('/\bmedicine\b/i', $norm) && !$isDentalOrVet)) || preg_match('/\bmd\b/i', $norm)) {
            $matchedKeys[] = 'medicine';
        }
        if (preg_match('/\bjuris doctor\b|\blaw\b|\bllb\b/i', $norm) && !str_contains($norm, 'criminology')) {
            $matchedKeys[] = 'law';
        }
        if (preg_match('/\b(automotive|welding|smaw|plumbing|cookery|bread and pastry|food and beverage|housekeeping|computer systems servicing|css|tvet|techvoc)\b/i', $norm)) {
            $matchedKeys[] = 'techvoc';
        }
        if (preg_match('/\b(visual arts|fine arts|music|dance|drama|theater|creative writing)\b/i', $norm)) {
            $matchedKeys[] = 'arts';
        }
        if (preg_match('/\b(tvl|agriculture and fisheries tvl|agricultural crop production)\b/i', $norm) && preg_match('/\b(shs|senior high|grade 11|grade 12|track)\b/i', $norm)) {
            $matchedKeys[] = 'tvl_agri';
        }

        return array_values(array_unique($matchedKeys));
    }

    /**
     * Match a student's course against a scholarship's eligible course rules.
     * 
     * @param string $studentCourse The course of the student
     * @param array $scholarship The scholarship database row or object
     * @return array ['matched' => bool, 'is_specific' => bool, 'match_type' => string, 'reason' => string]
     */
    public static function matchCourse(string $studentCourse, array $scholarship): array {
        $studentNorm = self::normalize($studentCourse);
        if ($studentNorm === '') {
            return [
                'matched' => false,
                'is_specific' => false,
                'match_type' => 'missing',
                'reason' => 'Student course information is missing.'
            ];
        }

        $matchMode = strtolower($scholarship['course_match_mode'] ?? 'specific');
        $eligibleCoursesStr = trim($scholarship['eligible_courses'] ?? '');
        $schName = strtolower($scholarship['name'] ?? '');
        $schCat = strtolower($scholarship['category'] ?? '');
        $schLevel = strtolower($scholarship['level'] ?? '');
        $schCode = strtoupper($scholarship['code'] ?? '');

        $studentKeys = self::getCanonicalKeys($studentCourse);

        // Discipline checks
        $isMedStudent = in_array('medicine', $studentKeys);
        $alliedHealthKeys = ['dental', 'nursing', 'medtech', 'pharmacy', 'physical_therapy', 'radtech', 'respiratory', 'occupational_therapy', 'psychology', 'veterinary', 'public_health', 'nutrition', 'biology', 'midwifery'];
        $isAlliedHealthStudent = !empty(array_intersect($studentKeys, $alliedHealthKeys));
        $isLawStudent = in_array('law', $studentKeys);
        $isTvlAgriStudent = in_array('tvl_agri', $studentKeys);
        $isTertiaryAgriStudent = !$isTvlAgriStudent && !empty(array_intersect($studentKeys, ['agri', 'fisheries', 'agri_eng', 'agribusiness', 'forestry', 'environmental']));
        $isTechVocStudent = in_array('techvoc', $studentKeys);
        $isArtsStudent = !empty(array_intersect($studentKeys, ['arts', 'arts_shs']));
        $isCollegiateAcademic = !empty(array_intersect($studentKeys, [
            'it', 'cs', 'is', 'cpe', 'accountancy', 'business_admin', 'management_accounting',
            'secondary_educ', 'elem_educ', 'communication', 'psychology', 'hospitality', 'tourism',
            'civil_eng', 'elec_eng', 'mech_eng', 'chem_eng', 'ece', 'math', 'criminology'
        ]));
        $isSeniorHighStudent = (bool)preg_match('/\b(senior high|shs|grade 11|grade 12|stem|abm|humss|gas|tvl track)\b/i', $studentNorm);

        // Specific Program Matching:

        // A. Doctor of Medicine (SCH-104)
        $isMedScholarship = ($schCode === 'SCH-104') || (str_contains($schName, 'doctor of medicine') || (str_contains($schCat, 'medical') && str_contains($schName, 'medicine')));
        if ($isMedScholarship) {
            if ($isMedStudent) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Exact match: Enrolled in Doctor of Medicine program ($studentCourse)."
                ];
            } else {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'Designated specifically for Doctor of Medicine (MD) students.'
                ];
            }
        }

        // B. Health and Sciences (SCH-109)
        $isHealthSciencesScholarship = ($schCode === 'SCH-109') || (str_contains($schName, 'health and sciences') || str_contains($schName, 'health & sciences'));
        if ($isHealthSciencesScholarship) {
            if ($isMedStudent) {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'Doctor of Medicine students must apply under the Doctor of Medicine Scholarship (SCH-104).'
                ];
            } elseif ($isAlliedHealthStudent) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Exact match: Enrolled in accredited Health & Allied Medical Sciences program ($studentCourse)."
                ];
            } else {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'Designated specifically for students in Health & Allied Medical Sciences programs (Nursing, Pharmacy, MedTech, Dentistry, etc.).'
                ];
            }
        }

        // C. Agri-Fisheries Tertiary (SCH-107)
        $isAgriTertiarySch = ($schCode === 'SCH-107') || (str_contains($schCat, 'agri') && (str_contains($schLevel, 'college') || str_contains($schLevel, 'tertiary') || str_contains($schName, 'tertiary')));
        if ($isAgriTertiarySch) {
            if ($isTvlAgriStudent) {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'TVL Agriculture and Fisheries students must apply under Agri-Fisheries Secondary (SCH-103).'
                ];
            } elseif ($isTertiaryAgriStudent) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Exact match: Enrolled in Agriculture or Fisheries degree program ($studentCourse)."
                ];
            } else {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'Designated specifically for tertiary students enrolled in Agriculture or Fisheries degree programs.'
                ];
            }
        }

        // D. Agri-Fisheries Secondary (SCH-103)
        $isAgriSecondarySch = ($schCode === 'SCH-103') || (str_contains($schCat, 'agri') && (str_contains($schLevel, 'secondary') || str_contains($schLevel, 'high school')));
        if ($isAgriSecondarySch) {
            if ($isTvlAgriStudent) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Exact match: Enrolled in TVL Agriculture/Fisheries track ($studentCourse)."
                ];
            } else {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'Designated specifically for secondary students in the TVL Agriculture and Fisheries track.'
                ];
            }
        }

        // E. Juris Doctor / Law (SCH-105)
        $isLawScholarship = ($schCode === 'SCH-105') || (str_contains($schName, 'juris doctor') || str_contains($schName, 'law') || str_contains($schCat, 'legal'));
        if ($isLawScholarship) {
            if ($isLawStudent) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Exact match: Enrolled in Juris Doctor / Law program ($studentCourse)."
                ];
            } else {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'Designated specifically for Juris Doctor / Law students.'
                ];
            }
        }

        // F. Tech-Voc (SCH-108)
        $isTechVocScholarship = ($schCode === 'SCH-108') || (str_contains($schName, 'techvoc') || str_contains($schCat, 'tech'));
        if ($isTechVocScholarship) {
            if ($isTechVocStudent) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Exact match: Enrolled in registered Tech-Voc / TVET program ($studentCourse)."
                ];
            } else {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'Designated specifically for registered Tech-Voc / TVET students.'
                ];
            }
        }

        // G. Arts Secondary / Expressive Arts (SCH-102)
        $isArtsScholarship = ($schCode === 'SCH-102') || (str_contains($schName, 'arts') || str_contains($schCat, 'arts'));
        if ($isArtsScholarship) {
            if ($isArtsStudent) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Exact match: Pursuing visual arts, music, dance, theater, or creative writing ($studentCourse)."
                ];
            } else {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'Designated specifically for students in Arts, Music, Dance, Theater, or Creative Writing.'
                ];
            }
        }

        // H. Academic Tertiary (SCH-106)
        $isAcademicTertiarySch = ($schCode === 'SCH-106') || (str_contains($schName, 'academic tertiary') || (str_contains($schCat, 'academic') && str_contains($schLevel, 'college')));
        if ($isAcademicTertiarySch) {
            // Specialized programs must route to their dedicated scholarships
            if ($isMedStudent || $isLawStudent || $isTertiaryAgriStudent || $isTvlAgriStudent || $isTechVocStudent || $isArtsStudent || $isSeniorHighStudent) {
                return [
                    'matched' => false,
                    'is_specific' => false,
                    'match_type' => 'program_mismatch',
                    'reason' => 'Applicants in specialized programs belong to their dedicated scholarship category.'
                ];
            }

            if ($isCollegiateAcademic) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Exact match: Enrolled in approved collegiate priority degree program ($studentCourse)."
                ];
            }

            // Universal tertiary match under "All Tertiary Courses" provision
            return [
                'matched' => true,
                'is_specific' => false,
                'match_type' => 'all_tertiary_match',
                'reason' => "Eligible match: Enrolled in accredited tertiary/college degree ($studentCourse)."
            ];
        }

        // I. Direct string comparison against eligible_courses list
        $eligibleList = array_filter(array_map('trim', explode(',', $eligibleCoursesStr)));
        foreach ($eligibleList as $item) {
            $itemNorm = self::normalize($item);
            if ($itemNorm === '' || $itemNorm === 'all' || $itemNorm === 'all courses' || $itemNorm === 'all tertiary courses') {
                continue;
            }

            if ($studentNorm === $itemNorm) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Your course ($studentCourse) is explicitly accepted for this scholarship."
                ];
            }

            $itemKeys = self::getCanonicalKeys($item);
            if (!empty($itemKeys) && !empty($studentKeys)) {
                $intersect = array_intersect($studentKeys, $itemKeys);
                if (!empty($intersect)) {
                    return [
                        'matched' => true,
                        'is_specific' => true,
                        'match_type' => 'specific_exact',
                        'reason' => "Your course ($studentCourse) is explicitly accepted for this scholarship."
                    ];
                }
            }

            $pattern = '/\b' . preg_quote($itemNorm, '/') . '\b/i';
            if (preg_match($pattern, $studentNorm)) {
                return [
                    'matched' => true,
                    'is_specific' => true,
                    'match_type' => 'specific_exact',
                    'reason' => "Your course ($studentCourse) is explicitly accepted for this scholarship."
                ];
            }
        }

        return [
            'matched' => false,
            'is_specific' => false,
            'match_type' => 'course_not_accepted',
            'reason' => "Your course ($studentCourse) is not currently on the list of accepted programs for this scholarship."
        ];
    }

    /**
     * Check comprehensive scholarship eligibility for a student.
     * Evaluates course, year level, school level, GWA/grades, family income, and school.
     * 
     * @param array $scholarship
     * @param array $studentData Array containing: course, year_level, school, gpa, family_income, address
     * @return array Comprehensive result with pass/fail, reasons, and criteria breakdown
     */
    public static function evaluate(array $scholarship, array $studentData): array {
        $studentCourse = trim($studentData['course'] ?? '');
        $studentYear   = trim($studentData['year_level'] ?? $studentData['yearLevel'] ?? '');
        $studentSchool = trim($studentData['school'] ?? '');
        $studentGpa    = $studentData['gpa'] ?? null;
        $studentIncome = $studentData['family_income'] ?? $studentData['income'] ?? null;
        $studentAddress= trim($studentData['address'] ?? '');

        $criteria = [];
        $unmetReasons = [];

        // 1. Course validation
        if ($studentCourse === '') {
            return [
                'eligible'       => false,
                'course_matched' => false,
                'is_specific'    => false,
                'is_best_fit'    => false,
                'status_tag'     => 'Profile Incomplete',
                'missing_info'   => true,
                'reasons'        => ['Course/program information is missing from your profile.'],
                'criteria'       => [
                    ['label' => 'Degree / Course Program', 'pass' => false, 'detail' => 'Please set your course in your profile to check eligibility.']
                ]
            ];
        }

        // Check if student was manually assigned to this scholarship by Administrator
        $isAdminAssigned = false;
        if (!empty($studentData['assigned_scholarship_id'])) {
            $assignedId = (int)$studentData['assigned_scholarship_id'];
            if ((int)($scholarship['id'] ?? 0) === $assignedId || (string)($scholarship['code'] ?? '') === (string)$assignedId) {
                $isAdminAssigned = true;
            }
        }

        $courseMatch = self::matchCourse($studentCourse, $scholarship);
        $coursePass = $courseMatch['matched'] || $isAdminAssigned;
        $courseReason = $isAdminAssigned ? ('Assigned by Administrator: ' . ($scholarship['name'] ?? '')) : $courseMatch['reason'];

        $criteria[] = [
            'label' => 'Course / Degree Program Match',
            'pass'  => $coursePass,
            'detail' => $courseReason
        ];

        if (!$coursePass) {
            $unmetReasons[] = $courseReason;
        }

        // 2. School level check (Secondary vs Tertiary vs Doctoral)
        $schLevel = strtolower($scholarship['level'] ?? '');
        $studentNorm = self::normalize($studentCourse);
        $studentYearNorm = self::normalize($studentYear);

        $isCollegeStudent = preg_match('/\b(bs|ba|bachelor|college|university|1st year|2nd year|3rd year|4th year|5th year)\b/i', $studentNorm . ' ' . $studentYearNorm);
        $isShsStudent = preg_match('/\b(senior high|shs|grade 11|grade 12|stem|abm|humss|gas|tvl)\b/i', $studentNorm . ' ' . $studentYearNorm);

        $levelPass = true;
        $levelDetail = $scholarship['level'] ?? 'General';

        if ($isAdminAssigned) {
            $levelDetail = 'Validated by Administrator assignment (' . ($scholarship['level'] ?? 'General') . ')';
        } elseif (str_contains($schLevel, 'high school') || str_contains($schLevel, 'secondary')) {
            if ($isCollegeStudent && !$isShsStudent) {
                $levelPass = false;
                $levelDetail = 'Designated for Senior High School students; your profile indicates College standing.';
                $unmetReasons[] = $levelDetail;
            }
        } elseif (str_contains($schLevel, 'college') || str_contains($schLevel, 'tertiary') || str_contains($schLevel, 'university')) {
            if ($isShsStudent && !$isCollegeStudent) {
                $levelPass = false;
                $levelDetail = 'Designated for College/University students; your profile indicates Senior High School standing.';
                $unmetReasons[] = $levelDetail;
            }
        } elseif (str_contains($schLevel, 'doctoral') || str_contains($schLevel, 'professional')) {
            $isProf = str_contains($studentNorm, 'doctor') || str_contains($studentNorm, 'medicine') || str_contains($studentNorm, 'juris') || str_contains($studentNorm, 'law');
            if (!$isProf) {
                $levelPass = false;
                $levelDetail = 'Designated for Professional / Doctoral students (Medicine or Law).';
                $unmetReasons[] = $levelDetail;
            }
        }

        $criteria[] = [
            'label' => 'Academic Standing / School Level',
            'pass'  => $levelPass,
            'detail' => $levelDetail
        ];

        // 3. Year Level check
        $eligibleYearsStr = trim($scholarship['eligible_year_levels'] ?? '');
        $yearPass = true;
        $yearDetail = 'Open to all year levels';

        if ($eligibleYearsStr !== '' && strtolower($eligibleYearsStr) !== 'all' && $studentYear !== '') {
            $acceptedYears = array_map('trim', explode(',', $eligibleYearsStr));
            $foundYear = false;
            foreach ($acceptedYears as $ay) {
                if (stripos($studentYear, $ay) !== false || stripos($ay, $studentYear) !== false) {
                    $foundYear = true;
                    break;
                }
            }
            if (!$foundYear) {
                $yearPass = false;
                $yearDetail = "Requires enrollment in: $eligibleYearsStr (Your year level: $studentYear)";
                $unmetReasons[] = $yearDetail;
            } else {
                $yearDetail = "Year level requirement satisfied: $studentYear";
            }
        }

        $criteria[] = [
            'label' => 'Year Level Standing',
            'pass'  => $yearPass,
            'detail' => $yearDetail
        ];

        // 4. Academic Grades / GWA check
        $minGwaStr = trim($scholarship['min_gwa'] ?? '');
        $gwaPass = true;
        $gwaDetail = 'No specific minimum grade required';

        if ($minGwaStr !== '' && $studentGpa !== null && $studentGpa !== '') {
            $gpaVal = (float)$studentGpa;

            if (str_contains($minGwaStr, '%') || (float)$minGwaStr > 5.0) {
                $minReq = (float)str_replace('%', '', $minGwaStr);
                if ($gpaVal > 5.0) {
                    if ($gpaVal < $minReq) {
                        $gwaPass = false;
                        $gwaDetail = "Minimum GWA required is {$minReq}% (your GWA: {$gpaVal}%).";
                        $unmetReasons[] = $gwaDetail;
                    } else {
                        $gwaDetail = "Grade requirement met: {$gpaVal}% >= {$minReq}%.";
                    }
                } else {
                    if ($gpaVal > 2.25) {
                        $gwaPass = false;
                        $gwaDetail = "Minimum GWA required is {$minGwaStr} (your recorded GPA is {$gpaVal}).";
                        $unmetReasons[] = $gwaDetail;
                    } else {
                        $gwaDetail = "Grade requirement satisfied (GPA: {$gpaVal}).";
                    }
                }
            } else {
                // Philippine 1.00 - 3.00 scale (where lower number is better)
                $minReq = (float)$minGwaStr;
                if ($gpaVal <= 5.0) {
                    if ($gpaVal > $minReq) {
                        $gwaPass = false;
                        $gwaDetail = "Minimum GWA required is {$minReq} or better (your GWA is {$gpaVal}).";
                        $unmetReasons[] = $gwaDetail;
                    } else {
                        $gwaDetail = "Grade requirement satisfied: GWA {$gpaVal} <= {$minReq}.";
                    }
                } else {
                    if ($gpaVal < 80.0) {
                        $gwaPass = false;
                        $gwaDetail = "Minimum GWA required is {$minGwaStr} (your GWA is {$gpaVal}%).";
                        $unmetReasons[] = $gwaDetail;
                    } else {
                        $gwaDetail = "Grade requirement satisfied ({$gpaVal}%).";
                    }
                }
            }
        } elseif ($minGwaStr !== '') {
            $gwaDetail = "Minimum GWA required: {$minGwaStr} (Evaluated upon grade submission)";
        }

        $criteria[] = [
            'label' => 'Academic Standing / GWA',
            'pass'  => $gwaPass,
            'detail' => $gwaDetail
        ];

        // 5. Family Income check
        $maxIncome = !empty($scholarship['max_income']) ? (float)$scholarship['max_income'] : null;
        $incomePass = true;
        $incomeDetail = 'No income ceiling specified';

        if ($maxIncome !== null && $maxIncome > 0 && $studentIncome !== null && $studentIncome !== '') {
            $schName = strtolower($scholarship['name'] ?? '');
            $isStemExempt = str_contains($schName, 'academic tertiary') && 
                            preg_match('/\b(engineering|technology|bsit|bscs|math|applied mathematics)\b/i', $studentNorm);

            if ($isStemExempt) {
                $incomeDetail = "Family income ceiling waived (Engineering, Mathematics, & Technology exemption)";
            } else {
                $cleanIncStr = preg_replace('/[^\d.]/', '', (string)$studentIncome);
                $incVal = (float)$cleanIncStr;

                if ($incVal > 0 && $incVal < 35000 && stripos((string)$studentIncome, 'month') !== false) {
                    $incVal *= 12;
                }

                if ($incVal > $maxIncome) {
                    $incomePass = false;
                    $incomeDetail = "Annual family income (₱" . number_format($incVal) . ") exceeds threshold of ₱" . number_format($maxIncome) . ".";
                    $unmetReasons[] = $incomeDetail;
                } else {
                    $incomeDetail = "Family income qualifies within ceiling of ₱" . number_format($maxIncome) . ".";
                }
            }
        } elseif ($maxIncome !== null && $maxIncome > 0) {
            $incomeDetail = "Family income ceiling: ₱" . number_format($maxIncome) . " (Evaluated upon document submission)";
        }

        $criteria[] = [
            'label' => 'Annual Family Income Ceiling',
            'pass'  => $incomePass,
            'detail' => $incomeDetail
        ];

        // 6. School / Institution requirement
        $eligibleSchoolsStr = trim($scholarship['eligible_schools'] ?? '');
        $schoolPass = true;
        $schoolDetail = 'Open to all schools within Ilocos Norte';

        if ($eligibleSchoolsStr !== '' && strtolower($eligibleSchoolsStr) !== 'all' && $studentSchool !== '') {
            $acceptedSchools = array_map('trim', explode(',', $eligibleSchoolsStr));
            $foundSchool = false;
            foreach ($acceptedSchools as $as) {
                if (stripos($studentSchool, $as) !== false || stripos($as, $studentSchool) !== false) {
                    $foundSchool = true;
                    break;
                }
            }
            if (!$foundSchool) {
                $schoolPass = false;
                $schoolDetail = "Designated for students of: $eligibleSchoolsStr (Your institution: $studentSchool)";
                $unmetReasons[] = $schoolDetail;
            } else {
                $schoolDetail = "Enrolled in accepted partner institution ($studentSchool)";
            }
        }

        $criteria[] = [
            'label' => 'Institution / University Partner',
            'pass'  => $schoolPass,
            'detail' => $schoolDetail
        ];

        // Overall eligibility calculation
        $allRequirementsMet = $coursePass && $levelPass && $yearPass && $gwaPass && $incomePass && $schoolPass;
        $isBestFit = $allRequirementsMet && $courseMatch['is_specific'];

        $statusTag = 'Not Eligible for Your Course';
        if ($allRequirementsMet) {
            $statusTag = 'Eligible';
        } elseif ($coursePass) {
            $statusTag = 'Requirements Not Met';
        }

        return [
            'eligible'         => $allRequirementsMet,
            'course_matched'   => $coursePass,
            'is_specific'      => $courseMatch['is_specific'],
            'is_best_fit'      => $isBestFit,
            'match_type'       => $courseMatch['match_type'],
            'reason'           => $courseMatch['reason'],
            'status_tag'       => $statusTag,
            'reasons'          => $unmetReasons,
            'criteria'         => $criteria
        ];
    }

    /**
     * Find the best matching scholarship for an applicant from an array of available scholarships.
     * Evaluates course compatibility, priority discipline routing, and comprehensive requirements.
     * 
     * @param array $scholarships List of scholarship rows
     * @param array $studentData Applicant profile data
     * @return array Structure containing matched_scholarship_id, matched_scholarship_name, matching_category, matching_reason, eligibility_status, and full evaluation
     */
    public static function findBestMatch(array $scholarships, array $studentData): array {
        // If student has an Administrator-assigned scholarship, honor it directly
        if (!empty($studentData['assigned_scholarship_id'])) {
            $assignedId = (int)$studentData['assigned_scholarship_id'];
            foreach ($scholarships as $sch) {
                if ((int)$sch['id'] === $assignedId || (string)$sch['code'] === (string)$assignedId) {
                    $eval = self::evaluate($sch, $studentData);
                    return [
                        'matched'                  => true,
                        'matched_scholarship_id'   => (int)$sch['id'],
                        'matched_scholarship_name' => $sch['name'],
                        'matching_category'        => $sch['category'] ?? 'Assigned Program',
                        'matching_reason'          => 'Assigned by Administrator: ' . $sch['name'] . ' (' . $sch['code'] . ')',
                        'eligibility_status'       => !empty($eval['eligible']) ? 'Eligible' : 'Assigned Program',
                        'scholarship'              => $sch,
                        'evaluation'               => $eval,
                        'all_evaluations'          => [$eval]
                    ];
                }
            }
        }

        $studentCourse = trim($studentData['course'] ?? '');
        $studentNorm = self::normalize($studentCourse);
        if ($studentCourse === '') {
            return [
                'matched'                  => false,
                'matched_scholarship_id'   => null,
                'matched_scholarship_name' => 'No Matching Scholarship',
                'matching_category'        => 'Unmatched',
                'matching_reason'          => 'Course/program information is missing from profile.',
                'eligibility_status'       => 'Requirements Not Met',
                'scholarship'              => null,
                'evaluation'               => null,
                'all_evaluations'          => []
            ];
        }

        $studentKeys = self::getCanonicalKeys($studentCourse);
        $isMedStudent = in_array('medicine', $studentKeys);
        $alliedHealthKeys = ['dental', 'nursing', 'medtech', 'pharmacy', 'physical_therapy', 'radtech', 'respiratory', 'occupational_therapy', 'psychology', 'veterinary', 'public_health', 'nutrition', 'biology', 'midwifery'];
        $isAlliedHealthStudent = !empty(array_intersect($studentKeys, $alliedHealthKeys));
        $isLawStudent = in_array('law', $studentKeys);
        $isTvlAgriStudent = in_array('tvl_agri', $studentKeys);
        $isTertiaryAgriStudent = !$isTvlAgriStudent && !empty(array_intersect($studentKeys, ['agri', 'fisheries', 'agri_eng', 'agribusiness', 'forestry', 'environmental']));
        $isTechVocStudent = in_array('techvoc', $studentKeys);
        $isArtsStudent = !empty(array_intersect($studentKeys, ['arts', 'arts_shs']));
        $isCollegiateAcademic = !empty(array_intersect($studentKeys, [
            'it', 'cs', 'is', 'cpe', 'accountancy', 'business_admin', 'management_accounting',
            'secondary_educ', 'elem_educ', 'communication', 'psychology', 'hospitality', 'tourism',
            'civil_eng', 'elec_eng', 'mech_eng', 'chem_eng', 'ece', 'math', 'criminology'
        ]));
        $isSeniorHighStudent = (bool)preg_match('/\b(senior high|shs|grade 11|grade 12|stem|abm|humss|gas|tvl track)\b/i', $studentNorm);

        $evaluations = [];
        $candidates = [];

        foreach ($scholarships as $sch) {
            $eval = self::evaluate($sch, $studentData);
            $schId = (int)$sch['id'];
            $schCode = strtoupper($sch['code'] ?? '');
            $schName = $sch['name'] ?? '';
            $evaluations[$schId] = $eval;

            if ($eval['course_matched']) {
                // Calculate match affinity score for ranking
                $score = 0;
                $isTargetDiscipline = false;

                if ($isMedStudent && ($schCode === 'SCH-104' || stripos($schName, 'doctor of medicine') !== false)) {
                    $score += 1500;
                    $isTargetDiscipline = true;
                } elseif ($isAlliedHealthStudent && ($schCode === 'SCH-109' || stripos($schName, 'health and sciences') !== false)) {
                    $score += 1500;
                    $isTargetDiscipline = true;
                } elseif ($isTertiaryAgriStudent && ($schCode === 'SCH-107' || stripos($schName, 'agri-fisheries tertiary') !== false)) {
                    $score += 1500;
                    $isTargetDiscipline = true;
                } elseif ($isTvlAgriStudent && ($schCode === 'SCH-103' || stripos($schName, 'agri-fisheries secondary') !== false)) {
                    $score += 1500;
                    $isTargetDiscipline = true;
                } elseif ($isLawStudent && ($schCode === 'SCH-105' || stripos($schName, 'juris doctor') !== false || stripos($schName, 'law') !== false)) {
                    $score += 1500;
                    $isTargetDiscipline = true;
                } elseif ($isTechVocStudent && ($schCode === 'SCH-108' || stripos($schName, 'techvoc') !== false)) {
                    $score += 1500;
                    $isTargetDiscipline = true;
                } elseif ($isArtsStudent && ($schCode === 'SCH-102' || stripos($schName, 'arts') !== false)) {
                    $score += 1500;
                    $isTargetDiscipline = true;
                } elseif ($schCode === 'SCH-106' || stripos($schName, 'academic tertiary') !== false) {
                    $score += $isCollegiateAcademic ? 1200 : 800;
                    $isTargetDiscipline = true;
                }

                if ($eval['is_specific']) {
                    $score += 500;
                }
                if ($eval['eligible']) {
                    $score += 200;
                }

                $candidates[] = [
                    'scholarship' => $sch,
                    'evaluation'  => $eval,
                    'score'       => $score,
                    'is_target'   => $isTargetDiscipline
                ];
            }
        }

        // Sort candidates by score descending
        usort($candidates, function($a, $b) {
            return $b['score'] <=> $a['score'];
        });

        if (!empty($candidates)) {
            $best = $candidates[0];
            $sch = $best['scholarship'];
            $eval = $best['evaluation'];

            $eligStatus = 'Eligible';
            if (!$eval['eligible']) {
                $eligStatus = 'Requirements Not Met';
            }

            return [
                'matched'                  => true,
                'matched_scholarship_id'   => (int)$sch['id'],
                'matched_scholarship_code' => $sch['code'] ?? '',
                'matched_scholarship_name' => $sch['name'] ?? '',
                'matching_category'        => $sch['category'] ?? 'General',
                'matching_reason'          => $eval['reason'] ?? "Course matched: $studentCourse",
                'eligibility_status'       => $eligStatus,
                'scholarship'              => $sch,
                'evaluation'               => $eval,
                'all_evaluations'          => $evaluations
            ];
        }

        // No matching scholarship found
        return [
            'matched'                  => false,
            'matched_scholarship_id'   => null,
            'matched_scholarship_code' => '',
            'matched_scholarship_name' => 'No Matching Scholarship',
            'matching_category'        => 'Unmatched',
            'matching_reason'          => 'No matching scholarships are currently available for your course.',
            'eligibility_status'       => 'No Matching Scholarship',
            'scholarship'              => null,
            'evaluation'               => null,
            'all_evaluations'          => $evaluations
        ];
    }
}

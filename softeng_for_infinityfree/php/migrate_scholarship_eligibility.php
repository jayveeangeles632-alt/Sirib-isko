<?php
/**
 * Migration: Add structured eligibility columns to scholarships table
 * Sirib i-Sko — PGIN Scholarship Management System
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

$pdo = Database::getConnection();
if (!$pdo) {
    echo "Database connection failed: " . Database::getError() . PHP_EOL;
    exit(1);
}

echo "Beginning scholarship eligibility migration..." . PHP_EOL;

// 1. Check existing columns
$existingCols = [];
$res = $pdo->query("SHOW COLUMNS FROM scholarships")->fetchAll(PDO::FETCH_ASSOC);
foreach ($res as $row) {
    $existingCols[strtolower($row['Field'])] = true;
}

$columnsToAdd = [
    'eligible_courses'     => "TEXT NULL DEFAULT NULL AFTER description",
    'course_match_mode'    => "VARCHAR(30) NOT NULL DEFAULT 'specific' AFTER eligible_courses",
    'min_gwa'              => "VARCHAR(30) NULL DEFAULT NULL AFTER course_match_mode",
    'max_income'           => "DECIMAL(12,2) NULL DEFAULT NULL AFTER min_gwa",
    'eligible_year_levels' => "VARCHAR(255) NULL DEFAULT NULL AFTER max_income",
    'eligible_schools'     => "VARCHAR(255) NULL DEFAULT NULL AFTER eligible_year_levels"
];

foreach ($columnsToAdd as $col => $def) {
    if (!isset($existingCols[strtolower($col)])) {
        echo "Adding column '$col' to 'scholarships'..." . PHP_EOL;
        $pdo->exec("ALTER TABLE scholarships ADD COLUMN $col $def");
    } else {
        echo "Column '$col' already exists in 'scholarships'." . PHP_EOL;
    }
}

// 2. Populate eligibility rules for the 8 standard PGIN scholarships
$defaults = [
    'SCH-101' => [
        'name' => 'Academic Secondary',
        'level' => 'Junior / Senior High School',
        'eligible_courses' => 'Senior High School, High School, STEM, ABM, HUMSS, GAS, TVL, General Academic',
        'course_match_mode' => 'all', // Open to all secondary tracks maintaining excellence
        'min_gwa' => '85%',
        'max_income' => 350000.00,
        'eligible_year_levels' => 'Senior High School, Grade 11, Grade 12',
        'eligible_schools' => 'All'
    ],
    'SCH-102' => [
        'name' => 'Arts Secondary',
        'level' => 'Junior / Senior High School',
        'eligible_courses' => 'Arts, Arts and Design Track, Performing Arts, Music, Visual Arts, Creative Writing, Theater Arts, Dance',
        'course_match_mode' => 'specific',
        'min_gwa' => '80%',
        'max_income' => 350000.00,
        'eligible_year_levels' => 'Junior High School, Senior High School, Grade 7, Grade 8, Grade 9, Grade 10, Grade 11, Grade 12',
        'eligible_schools' => 'All'
    ],
    'SCH-103' => [
        'name' => 'Agri-Fisheries Secondary',
        'level' => 'Junior / Senior High School',
        'eligible_courses' => 'TVL Track – Agriculture and Fisheries, Agriculture and Fishery Arts, Agri-Fisheries TVL, Agricultural Crop Production, Aquaculture',
        'course_match_mode' => 'specific',
        'min_gwa' => '80%',
        'max_income' => 350000.00,
        'eligible_year_levels' => 'Senior High School, Grade 11, Grade 12',
        'eligible_schools' => 'All'
    ],
    'SCH-104' => [
        'name' => 'Doctor of Medicine',
        'level' => 'Doctoral / Professional',
        'eligible_courses' => 'Doctor of Medicine, Medicine, MD',
        'course_match_mode' => 'specific',
        'min_gwa' => '2.00',
        'max_income' => NULL,
        'eligible_year_levels' => '1st Year, 2nd Year, 3rd Year, 4th Year',
        'eligible_schools' => 'Mariano Marcos State University, MMSU College of Medicine, Partner Institutions'
    ],
    'SCH-105' => [
        'name' => 'Juris Doctor',
        'level' => 'Doctoral / Professional',
        'eligible_courses' => 'Juris Doctor, Law, JD, Bachelor of Laws, LLB',
        'course_match_mode' => 'specific',
        'min_gwa' => '2.50',
        'max_income' => NULL,
        'eligible_year_levels' => '1st Year, 2nd Year, 3rd Year, 4th Year',
        'eligible_schools' => 'Mariano Marcos State University, MMSU, Northwestern University, NWU'
    ],
    'SCH-106' => [
        'name' => 'Academic Tertiary',
        'level' => 'College / University',
        // Broad tertiary priority programs including IT, Computer Science, Engineering, Education, Sciences, Business, Health
        'eligible_courses' => 'All Tertiary Courses, BS Information Technology, BS Computer Science, BS Information Systems, BS Civil Engineering, BS Electrical Engineering, BS Mechanical Engineering, BS Chemical Engineering, BS Computer Engineering, BS Electronics Engineering, BS Accountancy, BS Nursing, BS Pharmacy, BS Medical Technology, BS Biology, BS Chemistry, BS Applied Mathematics, BSEd, BEEd, Bachelor of Secondary Education, Bachelor of Elementary Education, BA Communication, BS Business Administration, BS Hospitality Management, BS Tourism, BS Criminology, All Courses',
        'course_match_mode' => 'all', // Open to all college/university priority courses
        'min_gwa' => '2.50',
        'max_income' => 350000.00,
        'eligible_year_levels' => '1st Year, 2nd Year, 3rd Year, 4th Year, 5th Year',
        'eligible_schools' => 'All'
    ],
    'SCH-107' => [
        'name' => 'Agri-Fisheries Tertiary',
        'level' => 'College / University / TVET',
        // Specific tertiary agriculture and fisheries degree programs
        'eligible_courses' => 'BS Agriculture, BSA, BS Fisheries, BS Fish, BS Agricultural and Biosystems Engineering, BSABE, BS Agricultural Engineering, BS Agribusiness, BS Forestry, BS Agroforestry, BS Environmental Science, Agriculture, Fisheries',
        'course_match_mode' => 'specific',
        'min_gwa' => '2.50',
        'max_income' => 350000.00,
        'eligible_year_levels' => '1st Year, 2nd Year, 3rd Year, 4th Year, 5th Year',
        'eligible_schools' => 'All'
    ],
    'SCH-108' => [
        'name' => 'TechVoc',
        'level' => 'TVET',
        'eligible_courses' => 'TechVoc, TVET, Technical Vocational, Automotive Servicing, Electrical Installation and Maintenance, Shielded Metal Arc Welding, SMAW, Cookery, Bread and Pastry Production, Food and Beverage Services, Computer Systems Servicing, CSS, Agricultural Crops Production, Animal Production, Driving, TESDA National Certificate',
        'course_match_mode' => 'specific',
        'min_gwa' => '80%',
        'max_income' => 350000.00,
        'eligible_year_levels' => '1st Year, 2nd Year, TVET, Tech-Voc',
        'eligible_schools' => 'All'
    ]
];

$upd = $pdo->prepare("
    UPDATE scholarships 
    SET eligible_courses = :eligible_courses,
        course_match_mode = :course_match_mode,
        min_gwa = :min_gwa,
        max_income = :max_income,
        eligible_year_levels = :eligible_year_levels,
        eligible_schools = :eligible_schools
    WHERE code = :code
");

foreach ($defaults as $code => $data) {
    echo "Updating eligibility for scholarship {$code} ({$data['name']})..." . PHP_EOL;
    $upd->execute([
        ':code'                 => $code,
        ':eligible_courses'     => $data['eligible_courses'],
        ':course_match_mode'    => $data['course_match_mode'],
        ':min_gwa'              => $data['min_gwa'],
        ':max_income'           => $data['max_income'],
        ':eligible_year_levels' => $data['eligible_year_levels'],
        ':eligible_schools'     => $data['eligible_schools']
    ]);
}

// 3. Ensure applications table has matching columns
echo "Checking applications table columns..." . PHP_EOL;
$appColsExisting = [];
$appRes = $pdo->query("SHOW COLUMNS FROM applications")->fetchAll(PDO::FETCH_ASSOC);
foreach ($appRes as $row) {
    $appColsExisting[strtolower($row['Field'])] = true;
}

$appColsToAdd = [
    'matched_scholarship_id'   => "int(11) DEFAULT NULL AFTER scholarship_id",
    'matched_scholarship_name' => "varchar(255) DEFAULT NULL AFTER matched_scholarship_id",
    'matching_category'        => "varchar(100) DEFAULT NULL AFTER matched_scholarship_name",
    'matching_reason'          => "text DEFAULT NULL AFTER matching_category",
    'eligibility_status'       => "varchar(50) DEFAULT 'Eligible' AFTER matching_reason"
];

foreach ($appColsToAdd as $col => $def) {
    if (!isset($appColsExisting[strtolower($col)])) {
        echo "Adding column '$col' to 'applications'..." . PHP_EOL;
        try {
            $pdo->exec("ALTER TABLE applications ADD COLUMN $col $def");
        } catch (Exception $e) {
            echo "Notice: Could not add '$col': " . $e->getMessage() . PHP_EOL;
        }
    } else {
        echo "Column '$col' already exists in 'applications'." . PHP_EOL;
    }
}

echo "Migration completed successfully!" . PHP_EOL;

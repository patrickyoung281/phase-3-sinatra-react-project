puts "🌱 Seeding..."

$language_data = [
    {
        language: "German",
        number_of_speakers: 95000000,
    },
    {
        language: "French",
        number_of_speakers: 321000000,
    },
    {
        language: "English",
        number_of_speakers: 400000000,
    },
]

$dialect_data = [
    {
        dialect_name: "Bavarian",
        number_of_speakers: 12000000,
        language_id: 1,
    },
    {
        dialect_name: "Kölsch",
        number_of_speakers: 500000,
        language_id: 1,
    },
    {
        dialect_name: "Louisiana French",
        number_of_speakers: 200000,
        language_id: 2,
    },
    {
        dialect_name: "Quebec French",
        number_of_speakers: 7000000,
        language_id: 2,
    },
    {
        dialect_name: "Scottish",
        number_of_speakers: 4000000,
        language_id: 3,
    },
    {
        dialect_name: "Pennsylvania Dutch English",
        number_of_speakers: 300000,
        language_id: 3,
    },

]

$language_data.each{|l| Language.create(l)}
$dialect_data.each{|d| Dialect.create(d)}

puts "✅ Done seeding!"

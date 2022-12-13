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
        language_id: 1,
    },
    {
        dialect_name: "Kölsch",
        language_id: 1,
    },
    {
        dialect_name: "Louisiana French",
        language_id: 2,
    },
    {
        dialect_name: "Quebec French",
        language_id: 2,
    },
    {
        dialect_name: "Scottish",
        language_id: 3,
    },
    {
        dialect_name: "Pennsylvania Dutch English",
        language_id: 3,
    },

]

$language_data.each{|l| Language.create(l)}
$dialect_data.each{|d| Dialect.create(d)}

puts "✅ Done seeding!"

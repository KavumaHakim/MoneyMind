-- Students table creation script for Supabase
-- Run this in your Supabase SQL editor to set up the database

-- Create the students table
CREATE TABLE IF NOT EXISTS students (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    class VARCHAR(10) NOT NULL,
    stream VARCHAR(50) NOT NULL,
    amount DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add constraints
ALTER TABLE students 
ADD CONSTRAINT check_class CHECK (class IN ('s1', 's2', 's3', 's4', 's5'));

ALTER TABLE students 
ADD CONSTRAINT check_stream CHECK (stream IN ('alpha', 'east', 'west', 'north', 'south'));

ALTER TABLE students 
ADD CONSTRAINT check_amount CHECK (amount >= 0);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_students_class ON students(class);
CREATE INDEX IF NOT EXISTS idx_students_stream ON students(stream);
CREATE INDEX IF NOT EXISTS idx_students_created_at ON students(created_at);

-- Function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at when a row is modified
CREATE OR REPLACE TRIGGER update_students_updated_at 
    BEFORE UPDATE ON students 
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Enable Row Level Security (RLS) if needed
-- ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Sample policy for authenticated users (uncomment if you want to enable RLS)
-- CREATE POLICY "Enable read access for all users" ON students FOR SELECT USING (true);
-- CREATE POLICY "Enable insert access for all users" ON students FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Enable update access for all users" ON students FOR UPDATE USING (true);
-- CREATE POLICY "Enable delete access for all users" ON students FOR DELETE USING (true);

-- Optional: Insert some sample data for testing
INSERT INTO students (name, class, stream, amount) VALUES
    ('John Doe', 's1', 'alpha', 15000.50),
    ('Jane Smith', 's2', 'east', 22000.75),
    ('Bob Johnson', 's3', 'west', 18500.00),
    ('Alice Brown', 's4', 'north', 31000.25),
    ('Charlie Wilson', 's5', 'south', 27500.80)
ON CONFLICT DO NOTHING;

-- Verify the table was created successfully
SELECT 'Students table created successfully!' as message;
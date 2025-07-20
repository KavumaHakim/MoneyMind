# Student Management System

A modern React-TypeScript application for managing student data with real-time updates using Supabase as the backend database.

## 🌟 Features

- **Student Registration**: Add new students with detailed information
- **Real-time Data**: Live updates when students are added/modified
- **Data Validation**: Form validation with user-friendly error messages
- **Responsive Design**: Modern UI that works on all device sizes
- **Supabase Integration**: Secure cloud database with real-time subscriptions
- **Advanced Table**: Sortable, paginated table with filtering capabilities
- **Type Safety**: Full TypeScript implementation for better development experience

## 📋 Student Data Structure

Each student record contains:
- **Name**: Student's full name
- **Class**: Academic class (S1, S2, S3, S4, S5)
- **Stream**: Academic stream (Alpha, East, West, North, South)
- **Amount**: Financial amount associated with the student
- **Timestamps**: Automatic creation and update timestamps

## 🚀 Setup Instructions

### 1. Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### 2. Environment Setup

Create a `.env` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Database Setup

1. Log into your Supabase dashboard
2. Go to the SQL Editor
3. Run the SQL script from `database_setup.sql` to create the students table:

```sql
-- This will create the students table with proper constraints and sample data
-- See database_setup.sql for the complete script
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📱 Application Structure

### Pages

1. **Dashboard** (`/`) - Main overview page with student data table
2. **Data Entry** (`/data`) - Form for adding new students
3. **Login** (`/login`) - Authentication page

### Key Components

- **DataEntry Form**: Complete form with validation for adding students
- **StudentsTable**: Advanced data table with sorting, pagination, and real-time updates
- **useStudents Hook**: Custom React hook for all student data operations

## 🎯 Usage Guide

### Adding a New Student

1. Navigate to the Data Entry page (`/data`)
2. Fill in all required fields:
   - **Student Name**: Enter the full name
   - **Class**: Select from S1-S5
   - **Stream**: Choose from Alpha, East, West, North, South
   - **Amount**: Enter a numeric value (decimals allowed)
3. Click "Add Student" to save
4. The form will reset and show a success message
5. The new student will appear in the table immediately (real-time update)

### Viewing Students

1. Go to the Dashboard page (`/`)
2. The table shows all students with:
   - Sortable columns (click headers to sort)
   - Pagination (configurable rows per page)
   - Search functionality
   - Refresh button for manual data reload
3. Stream values are color-coded for easy identification

### Form Validation

The form includes comprehensive validation:
- **Required Fields**: All fields must be filled
- **Name Validation**: Cannot be empty or just spaces
- **Amount Validation**: Must be a valid positive number
- **Real-time Feedback**: Errors clear as you type

## 🛠 Technical Features

### Real-time Updates

The application uses Supabase real-time subscriptions to automatically update the UI when:
- New students are added
- Existing students are modified
- Students are deleted

### Custom Hook (useStudents)

Provides a clean API for all student operations:

```typescript
const {
  students,          // Current student list
  loading,           // Loading state
  error,             // Error messages
  addStudent,        // Add new student
  updateStudent,     // Update existing student
  deleteStudent,     // Delete student
  fetchStudents,     // Manually refresh data
  getStatistics,     // Get data analytics
  clearError         // Clear error state
} = useStudents();
```

### Database Features

- **Constraints**: Data integrity with proper field validation
- **Indexes**: Optimized queries for better performance
- **Triggers**: Automatic timestamp updates
- **Security**: Row Level Security ready (commented policies in SQL)

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Confirmation messages for successful operations
- **Accessibility**: Proper labels, focus states, and keyboard navigation

## 📊 Data Visualization

The table component includes:
- **Color-coded Streams**: Easy visual identification
- **Formatted Currency**: Proper money formatting
- **Uppercase Classes**: Consistent text formatting
- **Pagination**: Handle large datasets efficiently
- **Empty States**: Helpful messages when no data exists

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Table.tsx       # Student data table
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── header.tsx      # Page header
├── Pages/              # Main application pages
│   ├── dashboard.tsx   # Main dashboard
│   ├── DataEntry.tsx   # Student entry form
│   └── login.tsx       # Authentication
├── Hooks/              # Custom React hooks
│   ├── useStudents.tsx # Student data management
│   └── useFetch.tsx    # HTTP requests (legacy)
└── supabase-client.tsx # Supabase configuration
```

## 📈 Future Enhancements

Potential improvements for the system:
- Student editing functionality
- Student deletion with confirmation
- Advanced filtering and search
- Data export features (CSV, PDF)
- Student profile pictures
- Bulk import functionality
- Analytics dashboard
- Email notifications
- Audit logs
- Advanced reporting

## 🔒 Security Notes

- Environment variables keep Supabase credentials secure
- Row Level Security can be enabled in Supabase
- Input validation prevents malicious data entry
- TypeScript provides compile-time type safety

## 🐛 Troubleshooting

### Common Issues

1. **Supabase Connection Errors**
   - Verify environment variables are set correctly
   - Check Supabase URL and key in dashboard

2. **Table Not Found**
   - Ensure you've run the database setup SQL script
   - Check table name matches exactly: "students"

3. **Real-time Not Working**
   - Verify Supabase real-time is enabled in project settings
   - Check browser console for connection errors

4. **Form Validation Issues**
   - Ensure all required fields are filled
   - Check amount field contains only numbers and decimals

## 📞 Support

For issues or questions:
1. Check the console for error messages
2. Verify Supabase connection and table setup
3. Review the database setup SQL script
4. Check environment variables configuration

## 📄 License

This project is built for educational and demonstration purposes. Feel free to use and modify as needed.
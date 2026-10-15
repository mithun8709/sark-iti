export function validateEnquiry(values: Record<string, string>, consent: boolean) {
 const errors: Record<string,string> = {};
 if (!values['name']?.trim()) errors['name'] = 'Please enter the student’s name.';
 if (!/^(?:\+91[ -]?)?[6-9]\d{9}$/.test(values['mobile']?.trim() ?? '')) errors['mobile'] = 'Enter a valid 10-digit Indian mobile number (optional +91).';
 if (values['email'] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values['email'])) errors['email'] = 'Enter a valid email address.';
 if (!values['course']) errors['course'] = 'Please select an interested course.';
 if (values['dob'] && values['dob'] > new Date().toISOString().slice(0,10)) errors['dob'] = 'Date of birth cannot be in the future.';
 if (!consent) errors['consent'] = 'Please confirm your consent to continue.';
 return errors;
}

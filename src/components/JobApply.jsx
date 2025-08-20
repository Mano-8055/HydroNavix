import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Upload, X, Check, User, Briefcase, GraduationCap, FileText, Plus, Mail } from 'lucide-react';

// Mock job data - replace with your actual Job import
const Job = [
  {
    title: "Senior Marine Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Singapore",
    experience: "5-8 years",
    shortDescription: "Join our elite marine engineering team to develop cutting-edge offshore solutions and drive innovation in marine technology.",
    roleOverview: "As a Senior Marine Engineer, you will lead complex marine projects, design innovative offshore solutions, and collaborate with cross-functional teams to deliver world-class marine engineering services.",
    responsibilities: [
      "Lead marine engineering projects from concept to completion",
      "Design and analyze offshore structures and marine systems",
      "Collaborate with naval architects and project managers",
      "Ensure compliance with international maritime standards",
      "Mentor junior engineers and provide technical guidance",
      "Conduct feasibility studies and risk assessments"
    ],
    mandatorySkills: [
      "Bachelor's degree in Marine Engineering or related field",
      "5+ years of experience in marine/offshore industry",
      "Proficiency in AutoCAD, SolidWorks, or similar CAD software",
      "Knowledge of maritime regulations and classification society rules",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities"
    ],
    advantages: [
      "Experience with subsea systems and underwater robotics",
      "Knowledge of hydrodynamic analysis software",
      "Previous project management experience",
      "Professional engineering certification"
    ]
  }
];

const HydroNavixApplication = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    nationality: '',
    jobTitle: '',
    company: '',
    experience: '',
    marineExperience: '',
    skills: [],
    qualification: '',
    fieldOfStudy: '',
    university: '',
    noticePeriod: '',
    expectedSalary: '',
    whyJoin: '',
    privacyPolicy: false
  });
  const [errors, setErrors] = useState({});

  const totalSteps = 5;
  
  // Get job details - using first job as example, you can modify this to use useParams
  const job = Job[0]; // In real app, use: Job.find(j => j.title.toLowerCase().replace(/\s+/g, "-") === title.toLowerCase())
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-save functionality (using state instead of localStorage)
  useEffect(() => {
    // In a real application, you could save to a server here
    console.log('Form data updated:', formData);
  }, [formData]);

  const skills = [
    'Marine Engineering', 'Naval Architecture', 'Offshore Operations', 'Subsea Engineering',
    'Port Management', 'Maritime Law', 'Hydrodynamics', 'Marine Surveying', 'Ship Design',
    'Underwater Robotics', 'Ocean Engineering', 'Marine Electronics', 'Navigation Systems',
    'Maritime Safety', 'Environmental Compliance', 'Project Management'
  ];

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+$/i.test(formData.email)) newErrors.email = 'Invalid email address';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required';
        break;
      case 2:
        if (!formData.experience) newErrors.experience = 'Experience is required';
        if (!formData.marineExperience) newErrors.marineExperience = 'Please select an option';
        break;
      case 3:
        if (!formData.qualification) newErrors.qualification = 'Qualification is required';
        if (!formData.fieldOfStudy.trim()) newErrors.fieldOfStudy = 'Field of study is required';
        if (!formData.university.trim()) newErrors.university = 'University is required';
        break;
      case 5:
        if (!formData.noticePeriod) newErrors.noticePeriod = 'Notice period is required';
        if (!formData.whyJoin.trim()) newErrors.whyJoin = 'Please tell us why you want to join';
        break;
      case 6:
        if (!formData.privacyPolicy) newErrors.privacyPolicy = 'You must accept the privacy policy';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 0) {
      // No validation needed for job details step
      setCurrentStep(currentStep + 1);
      return;
    }
    
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSkillToggle = (skill) => {
    const currentSkills = formData.skills || [];
    const updatedSkills = currentSkills.includes(skill)
      ? currentSkills.filter(s => s !== skill)
      : [...currentSkills, skill];
    updateFormData('skills', updatedSkills);
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles(prev => ({ ...prev, [type]: file }));
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFiles(prev => ({ ...prev, [type]: file }));
    }
  };

  const removeFile = (type) => {
    setUploadedFiles(prev => {
      const updated = { ...prev };
      delete updated[type];
      return updated;
    });
  };

const handleSubmit = async () => {
  if (!validateStep(7)) return;

  try {
    const emailData = {
      to: 'byvenkataraja@gmail.com',
      subject: `New Application - ${formData.fullName} for Marine Position`,
      body: `
        <h2>New Job Application Received</h2>
        
        <h3>Personal Details</h3>
        <p><b>Name:</b> ${formData.fullName}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Phone:</b> ${formData.phone}</p>
        <p><b>Location:</b> ${formData.location}</p>
        <p><b>Nationality:</b> ${formData.nationality}</p>

        <h3>Professional Background</h3>
        <p><b>Current Role:</b> ${formData.jobTitle} at ${formData.company}</p>
        <p><b>Experience:</b> ${formData.experience} years</p>
        <p><b>Marine Experience:</b> ${formData.marineExperience}</p>
        <p><b>Key Skills:</b> ${formData.skills?.join(', ') || 'None specified'}</p>

        <h3>Education</h3>
        <p><b>Qualification:</b> ${formData.qualification}</p>
        <p><b>Field of Study:</b> ${formData.fieldOfStudy}</p>
        <p><b>University:</b> ${formData.university}</p>

        <h3>Additional Information</h3>
        <p><b>Notice Period:</b> ${formData.noticePeriod}</p>
        <p><b>Expected Salary:</b> ${formData.expectedSalary || 'Not specified'}</p>
        <p><b>Why HydroNavix:</b> ${formData.whyJoin}</p>

        <h3>Files Uploaded</h3>
        <p>${Object.values(uploadedFiles).map(f => f.name).join(', ') || 'None'}</p>
      `
    };

    // TODO: Call your backend/email service
    // await fetch('/api/sendEmail', { ... })

    console.log('Application submitted:', { ...formData, files: uploadedFiles });

    setIsSubmitted(true);
  } catch (error) {
    console.error('Submission error:', error);
    setError('There was an error submitting your application. Please try again.');
  }
};

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-24">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-black text-white p-12 rounded-2xl">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-xl mb-8">
              Thank you, {formData.fullName?.split(' ')[0]}! Your application has been received.
              Our recruitment team will review your profile and contact you if shortlisted.
            </p>
            <div className="text-gray-300 text-sm">
              <p>Expected review timeline: 5-7 business days</p>
              <p>Questions? Contact us at careers@hydronavix.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">{job.type}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">{job.location}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">{job.experience}</span>
              </div>
              <p className="text-lg text-gray-700 mb-8">{job.shortDescription}</p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Role Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">{job.roleOverview}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Required Skills & Qualifications</h2>
              <ul className="space-y-2">
                {job.mandatorySkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>

            {job.advantages && job.advantages.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Preferred Qualifications</h2>
                <ul className="space-y-2">
                  {job.advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-start">
                      <Plus className="w-4 h-4 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Ready to Apply?</h3>
              <p className="text-blue-800">Click "Start Application" below to begin your application process. The form will take approximately 5-10 minutes to complete.</p>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold">Personal Details</h2>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                value={formData.fullName}
                onChange={(e) => updateFormData('fullName', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                type="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <div className="flex">
                <select 
                  className="p-4 border border-gray-300 rounded-l-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none bg-gray-50"
                  defaultValue="+91"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                </select>
                <input
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="flex-1 p-4 border-t border-r border-b border-gray-300 rounded-r-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Current Location *</label>
              <input
                value={formData.location}
                onChange={(e) => updateFormData('location', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                placeholder="City, Country"
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nationality *</label>
              <select
                value={formData.nationality}
                onChange={(e) => updateFormData('nationality', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
              >
                <option value="">Select nationality</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Australian">Australian</option>
                <option value="Canadian">Canadian</option>
                <option value="Other">Other</option>
              </select>
              {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold">Professional Background</h2>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Current Job Title</label>
              <input
                value={formData.jobTitle}
                onChange={(e) => updateFormData('jobTitle', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                placeholder="e.g. Marine Engineer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Current Company</label>
              <input
                value={formData.company}
                onChange={(e) => updateFormData('company', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Total Years of Experience *</label>
              <select
                value={formData.experience}
                onChange={(e) => updateFormData('experience', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="2-3">2-3 years</option>
                <option value="4-6">4-6 years</option>
                <option value="7-10">7-10 years</option>
                <option value="10+">10+ years</option>
              </select>
              {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Marine/Offshore Industry Experience *</label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="marineExperience"
                    value="yes"
                    checked={formData.marineExperience === 'yes'}
                    onChange={(e) => updateFormData('marineExperience', e.target.value)}
                    className="mr-2 w-4 h-4"
                  />
                  <span className={`px-4 py-2 border border-gray-300 rounded-lg transition-all ${formData.marineExperience === 'yes' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}>Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="marineExperience"
                    value="no"
                    checked={formData.marineExperience === 'no'}
                    onChange={(e) => updateFormData('marineExperience', e.target.value)}
                    className="mr-2 w-4 h-4"
                  />
                  <span className={`px-4 py-2 border border-gray-300 rounded-lg transition-all ${formData.marineExperience === 'no' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}>No</span>
                </label>
              </div>
              {errors.marineExperience && <p className="text-red-500 text-sm mt-1">{errors.marineExperience}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Key Skills</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                {skills.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`p-2 text-sm rounded-lg border transition-all ${
                      formData.skills?.includes(skill)
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Highest Qualification *</label>
              <select
                value={formData.qualification}
                onChange={(e) => updateFormData('qualification', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
              >
                <option value="">Select qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
                <option value="Professional Certification">Professional Certification</option>
              </select>
              {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Field of Study *</label>
              <input
                value={formData.fieldOfStudy}
                onChange={(e) => updateFormData('fieldOfStudy', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                placeholder="e.g. Marine Engineering, Naval Architecture"
              />
              {errors.fieldOfStudy && <p className="text-red-500 text-sm mt-1">{errors.fieldOfStudy}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">University/Institute *</label>
              <input
                value={formData.university}
                onChange={(e) => updateFormData('university', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                placeholder="Institution name"
              />
              {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university}</p>}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold">Upload Documents</h2>
            </div>

            {['resume', 'coverLetter', 'portfolio'].map((type) => {
              const labels = {
                resume: 'Resume/CV *',
                coverLetter: 'Cover Letter (Optional)',
                portfolio: 'Portfolio/Project References (Optional)'
              };

              return (
                <div key={type}>
                  <label className="block text-sm font-medium mb-2">{labels[type]}</label>
                  {uploadedFiles[type] ? (
                    <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-300 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        <span className="text-sm">{uploadedFiles[type].name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(type)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-all ${
                        dragActive ? 'border-black bg-gray-50' : 'hover:border-gray-400'
                      }`}
                      onDragEnter={() => setDragActive(true)}
                      onDragLeave={() => setDragActive(false)}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => handleDrop(e, type)}
                    >
                      <Upload className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600 mb-2">Drag & drop your file here, or</p>
                      <label className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-all">
                        Browse Files
                        <input
                          type="file"
                          className="hidden"
                          accept={type === 'portfolio' ? '.pdf,.doc,.docx,.jpg,.png' : '.pdf,.doc,.docx'}
                          onChange={(e) => handleFileUpload(e, type)}
                        />
                      </label>
                      <p className="text-xs text-gray-500 mt-2">
                        {type === 'portfolio' ? 'PDF, DOC, JPG, PNG up to 5MB' : 'PDF, DOC up to 5MB'}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Plus className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold">Additional Information</h2>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notice Period *</label>
              <select
                value={formData.noticePeriod}
                onChange={(e) => updateFormData('noticePeriod', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
              >
                <option value="">Select notice period</option>
                <option value="Immediate">Immediate</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
              </select>
              {errors.noticePeriod && <p className="text-red-500 text-sm mt-1">{errors.noticePeriod}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Expected Salary (Optional)</label>
              <input
                value={formData.expectedSalary}
                onChange={(e) => updateFormData('expectedSalary', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                placeholder="e.g. ₹50,000 per month or $60,000 per year"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Why do you want to join HydroNavix? *</label>
              <textarea
                value={formData.whyJoin}
                onChange={(e) => updateFormData('whyJoin', e.target.value)}
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all resize-none"
                placeholder="Share your motivation and what excites you about HydroNavix..."
              />
              {errors.whyJoin && <p className="text-red-500 text-sm mt-1">{errors.whyJoin}</p>}
            </div>
            
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={formData.privacyPolicy}
                onChange={(e) => updateFormData('privacyPolicy', e.target.checked)}
                className="mt-1"
              />
              <label className="text-sm">
                I agree to HydroNavix's <a href="#" className="text-black underline hover:no-underline">Privacy Policy</a> 
                and consent to the processing of my personal data for recruitment purposes. *
              </label>
            </div>
            {errors.privacyPolicy && <p className="text-red-500 text-sm">{errors.privacyPolicy}</p>}
          </div>
      
        );



      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen px-4 py-24">
      {/* Header */}
      <div className="bg-black text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">HydroNavix</h1>
          <p className="text-gray-300">Elite Marine & Offshore Careers</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydroNavixApplication;
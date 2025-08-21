import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  Upload,
  X,
  Check,
  User,
  Briefcase,
  GraduationCap,
  FileText,
  Plus,
  Mail,
} from "lucide-react";
import Job from "../json/Job";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const HydroNavixApplication = () => {
  const { title } = useParams();
  const job = Job.find((j) => slugify(j.title) === title.toLowerCase()) || null;

  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    jobRole: job.title,
    fullName: "",
    email: "",
    phone: "",
    location: "",
    nationality: "",
    jobTitle: "",
    company: "",
    experience: "",
    marineExperience: "",
    skills: [],
    qualification: "",
    fieldOfStudy: "",
    university: "",
    noticePeriod: "",
    expectedSalary: "",
    whyJoin: "",
    privacyPolicy: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const totalSteps = 5;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    "Marine Engineering",
    "Naval Architecture",
    "Offshore Operations",
    "Subsea Engineering",
    "Port Management",
    "Maritime Law",
    "Hydrodynamics",
    "Marine Surveying",
    "Ship Design",
    "Underwater Robotics",
    "Ocean Engineering",
    "Marine Electronics",
    "Navigation Systems",
    "Maritime Safety",
    "Environmental Compliance",
    "Project Management",
  ];

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.fullName.trim())
          newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+$/i.test(formData.email))
          newErrors.email = "Invalid email address";
        if (!formData.phone.trim())
          newErrors.phone = "Phone number is required";
        if (!formData.location.trim())
          newErrors.location = "Location is required";
        if (!formData.nationality.trim())
          newErrors.nationality = "Nationality is required";
        break;
      case 2:
        if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required";
        if (!formData.company) newErrors.company = "Company is required";
        if (!formData.experience)
          newErrors.experience = "Experience is required";
        if (!formData.marineExperience)
          newErrors.marineExperience = "Please select an option";
        break;
      case 3:
        if (!formData.qualification)
          newErrors.qualification = "Qualification is required";
        if (!formData.fieldOfStudy.trim())
          newErrors.fieldOfStudy = "Field of study is required";
        if (!formData.university.trim())
          newErrors.university = "University is required";
        break;
      case 4:
        if (!uploadedFiles.resume) newErrors.resume = "Resume is required";
        break;
      case 5:
        if (!formData.noticePeriod)
          newErrors.noticePeriod = "Notice period is required";
        if (!formData.whyJoin.trim())
          newErrors.whyJoin = "Please tell us why you want to join";
        break;
      case 6:
        if (!formData.privacyPolicy)
          newErrors.privacyPolicy = "You must accept the privacy policy";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSkillToggle = (skill) => {
    const currentSkills = formData.skills || [];
    const updatedSkills = currentSkills.includes(skill)
      ? currentSkills.filter((s) => s !== skill)
      : [...currentSkills, skill];
    updateFormData("skills", updatedSkills);
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles((prev) => ({ ...prev, [type]: file }));
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFiles((prev) => ({ ...prev, [type]: file }));
    }
  };

  const removeFile = (type) => {
    setUploadedFiles((prev) => {
      const updated = { ...prev };
      delete updated[type];
      return updated;
    });
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setLoading(true);
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    Object.values(uploadedFiles).forEach((file) => {
      formDataToSend.append("files", file);
    });

    try {
      const res = await fetch(
        `https://hydronavixmarinebackend.onrender.com/apply`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-secondary text-primary p-10">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-18 h-18 text-secondary" />
            </div>
            <h1 className="text-2xl font-semibold mb-4">
              Application Submitted!
            </h1>
            <p className="text-xl mb-8 text-primary/80">
              Thank you, {formData.fullName?.split(" ")[0]}! Your application
              has been received. Our recruitment team will review your profile
              and contact you if shortlisted.
            </p>
            <div className="text-gray-300 text-sm">
              <p>Expected review timeline: 5-7 business days</p>
              <p>Questions? Contact us at careers@hydronavix.com</p>
            </div>
            <Link
              to="/"
              className="inline-block text-primary underline underline-offset-2 py-3 font-medium hover:text-primary/90 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl font-bold mb-1.5">{job.title}</h1>
              <div className="flex flex-wrap gap-2 text-sm text-secondary/80 mb-5">
                <span className="bg-secondary/20 px-2.5 py-1 rounded-full">
                  {job.department}
                </span>
                <span className="bg-secondary/20 px-2.5 py-1 rounded-full">
                  {job.type}
                </span>
                <span className="bg-secondary/20 px-2.5 py-1 rounded-full">
                  {job.location}
                </span>
                <span className="bg-secondary/20 px-2.5 py-1 rounded-full">
                  {job.experience}
                </span>
              </div>
            </div>

            <section>
              <h2 className="text-md md:text-lg font-semibold mb-1.5">
                Role Overview
              </h2>
              <p className="text-secondary/70 leading-relaxed">
                {job.roleOverview}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-md md:text-lg font-semibold mb-1.5">
                Key Responsibilities
              </h2>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-secondary/70">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-md md:text-lg font-semibold mb-1.5">
                Required Skills & Qualifications
              </h2>
              <ul className="space-y-2">
                {job.mandatorySkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-secondary/70">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>

            {job.advantages && job.advantages.length > 0 && (
              <section className="mb-8">
                <h2 className="text-md md:text-lg font-semibold mb-1.5">
                  Preferred Qualifications
                </h2>
                <ul className="space-y-2">
                  {job.advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span className="text-secondary/70">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-3" />
              <h2 className="text-lg md:text-xl font-semibold">
                Personal Details
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Full Name *
              </label>
              <input
                value={formData.fullName}
                onChange={(e) => updateFormData("fullName", e.target.value)}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Email Address *
              </label>
              <input
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                type="email"
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Phone Number *
              </label>
              <div className="flex">
                <select
                  className="px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none bg-primary"
                  defaultValue="+91"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                </select>
                <input
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="flex-1 px-2 py-2.5 border-t border-r border-b border-secondary/30 focus:border-secondary outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Current Location *
              </label>
              <input
                value={formData.location}
                onChange={(e) => updateFormData("location", e.target.value)}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
                placeholder="City, Country"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Nationality *
              </label>
              <select
                value={formData.nationality}
                onChange={(e) => updateFormData("nationality", e.target.value)}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
              >
                <option value="">Select nationality</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Australian">Australian</option>
                <option value="Canadian">Canadian</option>
                <option value="Other">Other</option>
              </select>
              {errors.nationality && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nationality}
                </p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center">
              <Briefcase className="w-5 h-5 mr-3" />
              <h2 className="text-lg md:text-xl font-semibold">
                Professional Background
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Current Job Title
              </label>
              <input
                value={formData.jobTitle}
                onChange={(e) => updateFormData("jobTitle", e.target.value)}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
                placeholder="e.g. Marine Engineer"
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Current Company
              </label>
              <input
                value={formData.company}
                onChange={(e) => updateFormData("company", e.target.value)}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
                placeholder="Company name"
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Total Years of Experience *
              </label>
              <select
                value={formData.experience}
                onChange={(e) => updateFormData("experience", e.target.value)}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="2-3">2-3 years</option>
                <option value="4-6">4-6 years</option>
                <option value="7-10">7-10 years</option>
                <option value="10+">10+ years</option>
              </select>
              {errors.experience && (
                <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Marine/Offshore Industry Experience *
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="marineExperience"
                    value="yes"
                    checked={formData.marineExperience === "yes"}
                    onChange={(e) =>
                      updateFormData("marineExperience", e.target.value)
                    }
                    className="mr-2 w-4 h-4"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="marineExperience"
                    value="no"
                    checked={formData.marineExperience === "no"}
                    onChange={(e) =>
                      updateFormData("marineExperience", e.target.value)
                    }
                    className="mr-2 w-4 h-4"
                  />
                  <span>No</span>
                </label>
              </div>
              {errors.marineExperience && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.marineExperience}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Key Skills
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`p-1.5 text-sm border transition-all ${
                      formData.skills?.includes(skill)
                        ? "bg-secondary text-primary border-secondary"
                        : "bg-primary text-secondary border-secondary/30 hover:bg-gray-50"
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
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-3" />
              <h2 className="text-lg md:text-xl font-semibold">Education</h2>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Highest Qualification *
              </label>
              <select
                value={formData.qualification}
                onChange={(e) =>
                  updateFormData("qualification", e.target.value)
                }
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
              >
                <option value="">Select qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
                <option value="Professional Certification">
                  Professional Certification
                </option>
              </select>
              {errors.qualification && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.qualification}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Field of Study *
              </label>
              <input
                value={formData.fieldOfStudy}
                onChange={(e) => updateFormData("fieldOfStudy", e.target.value)}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
                placeholder="e.g. Marine Engineering, Naval Architecture"
              />
              {errors.fieldOfStudy && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fieldOfStudy}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                University/Institute *
              </label>
              <input
                value={formData.university}
                onChange={(e) => updateFormData("university", e.target.value)}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
                placeholder="Institution name"
              />
              {errors.university && (
                <p className="text-red-500 text-sm mt-1">{errors.university}</p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-3" />
              <h2 className="text-lg md:text-xl font-semibold">
                Upload Documents
              </h2>
            </div>

            {["resume", "coverLetter", "portfolio"].map((type) => {
              const labels = {
                resume: "Resume/CV *",
                coverLetter: "Cover Letter (Optional)",
                portfolio: "Portfolio/Project References (Optional)",
              };

              return (
                <div key={type}>
                  <label className="block text-sm font-medium mb-1.5">
                    {labels[type]}
                  </label>
                  {uploadedFiles[type] ? (
                    <div className="flex items-center justify-between p-4 bg-gray-50 border border-secondary/30">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        <span className="text-sm">
                          {uploadedFiles[type].name}
                        </span>
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
                      className={`border-2 border-dashed border-secondary/30 p-8 text-center transition-all ${
                        dragActive
                          ? "border-secondary bg-gray-50"
                          : "hover:border-secondary/70"
                      }`}
                      onDragEnter={() => setDragActive(true)}
                      onDragLeave={() => setDragActive(false)}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => handleDrop(e, type)}
                    >
                      <Upload className="w-8 h-8 mx-auto mb-4 text-secondary/70" />
                      <p className="text-secondary/70 mb-2">
                        Drag & drop your file here, or
                      </p>
                      <label className="bg-secondary text-primary px-2 py-2 hover:bg-secondary/80 cursor-pointer transition-all">
                        Browse Files
                        <input
                          type="file"
                          className="hidden"
                          accept={
                            type === "portfolio"
                              ? ".pdf,.doc,.docx,.jpg,.png"
                              : ".pdf,.doc,.docx"
                          }
                          onChange={(e) => handleFileUpload(e, type)}
                        />
                      </label>
                      <p className="text-xs text-secondary/70 mt-2">
                        {type === "portfolio"
                          ? "PDF, DOC, JPG, PNG up to 5MB"
                          : "PDF, DOC up to 5MB"}
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
            <div className="flex items-center">
              <Plus className="w-5 h-5 mr-3" />
              <h2 className="text-lg md:text-xl font-semibold">
                Additional Information
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Notice Period *
              </label>
              <select
                value={formData.noticePeriod}
                onChange={(e) => updateFormData("noticePeriod", e.target.value)}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
              >
                <option value="">Select notice period</option>
                <option value="Immediate">Immediate</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
              </select>
              {errors.noticePeriod && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.noticePeriod}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Expected Salary (Optional)
              </label>
              <input
                value={formData.expectedSalary}
                onChange={(e) =>
                  updateFormData("expectedSalary", e.target.value)
                }
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all"
                placeholder="e.g. ₹50,000 per month or $60,000 per year"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Why do you want to join HydroNavix? *
              </label>
              <textarea
                value={formData.whyJoin}
                onChange={(e) => updateFormData("whyJoin", e.target.value)}
                rows={4}
                className="w-full px-2 py-2.5 border border-secondary/30 focus:border-secondary outline-none transition-all resize-none"
                placeholder="Share your motivation and what excites you about HydroNavix..."
              />
              {errors.whyJoin && (
                <p className="text-red-500 text-sm mt-1">{errors.whyJoin}</p>
              )}
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={formData.privacyPolicy}
                onChange={(e) =>
                  updateFormData("privacyPolicy", e.target.checked)
                }
                className="mt-1"
              />
              <label className="text-sm">
                I agree to HydroNavix's{" "}
                <a
                  href="#"
                  className="text-secondary underline hover:no-underline"
                >
                  Privacy Policy
                </a>
                and consent to the processing of my personal data for
                recruitment purposes. *
              </label>
            </div>
            {errors.privacyPolicy && (
              <p className="text-red-500 text-sm">{errors.privacyPolicy}</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="bg-secondary text-primary py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl text-center font-semibold mb-1.5">
            HydroNavix
          </h1>
          <p className="text-primary/70 text-center">
            Elite Marine & Offshore Careers
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="py-6 px-4 ">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-secondary/70">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-secondary/30 rounded-full h-2">
            <div
              className="bg-secondary h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-secondary/20">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex items-center px-3 py-2 transition-all ${
                currentStep === 1
                  ? "border border-secondary/50 text-secondary/50 cursor-not-allowed"
                  : "border border-secondary text-secondary"
              }`}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center px-3 py-2 bg-secondary text-primary hover:bg-secondary/70 transition-all"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={
                  loading ||
                  !formData.noticePeriod ||
                  !formData.whyJoin.trim() ||
                  !formData.privacyPolicy ||
                  !uploadedFiles.resume
                }
                className={`flex items-center px-3 py-2 font-semibold transition-all ${
                  loading ||
                  !formData.noticePeriod ||
                  !formData.whyJoin.trim() ||
                  !formData.privacyPolicy ||
                  !uploadedFiles.resume
                    ? "bg-secondary/50 text-primary/70 cursor-not-allowed"
                    : "bg-secondary text-primary hover:bg-secondary/70"
                }`}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  <Mail className="w-4 h-4 mr-2" />
                )}
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydroNavixApplication;

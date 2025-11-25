import React, { useState } from "react";
import {
  Lock,
  Server,
  Database,
  Shield,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    wpAdminUrl: "",
    wpUsername: "",
    wpPassword: "",
    hostingProvider: "",
    cpanelUrl: "",
    cpanelUsername: "",
    ftpCredentials: "",
    issues: "",
    hasBackup: false,
    hasStaging: false,
    clientEmail: "",
    clientName: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (
      !formData.clientName ||
      !formData.clientEmail ||
      !formData.wpAdminUrl ||
      !formData.wpUsername ||
      !formData.wpPassword
    ) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      // Create text content
      const textContent = `
    ========================================
    WORDPRESS CREDENTIALS SUBMISSION
    ========================================
    
    Project: PT Overcrank Media Production
    Submitted: ${timestamp}
    
    ----------------------------------------
    CLIENT INFORMATION
    ----------------------------------------
    Name: ${formData.clientName}
    Email: ${formData.clientEmail}
    
    ----------------------------------------
    WORDPRESS ADMIN ACCESS
    ----------------------------------------
    Admin URL: ${formData.wpAdminUrl}
    Username: ${formData.wpUsername}
    Password: ${formData.wpPassword}
    
    ----------------------------------------
    HOSTING INFORMATION
    ----------------------------------------
    Hosting Provider: ${formData.hostingProvider || "Not provided"}
    cPanel URL: ${formData.cpanelUrl || "Not provided"}
    cPanel Username: ${formData.cpanelUsername || "Not provided"}
    
    ----------------------------------------
    FTP/SFTP CREDENTIALS
    ----------------------------------------
    ${formData.ftpCredentials || "Not provided"}
    
    ----------------------------------------
    ADDITIONAL INFORMATION
    ----------------------------------------
    Current Issues/Requirements:
    ${formData.issues || "None specified"}
    
    Has Recent Backup: ${formData.hasBackup ? "Yes" : "No"}
    Has Staging Site: ${formData.hasStaging ? "Yes" : "No"}
    
    ----------------------------------------
    SECURITY NOTE
    ----------------------------------------
    Please keep this file secure and delete after 
    the credentials have been safely transferred.
    
    Contact: IdProject
    Email: idprojectworkmail@gmail.com
    Phone: +62 81338452753
    ========================================
          `.trim();

      // Create blob and download
      const blob = new Blob([textContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `wordpress-credentials-${formData.clientName
        .replace(/\s+/g, "-")
        .toLowerCase()}-${Date.now()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Show success
      setSubmitStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          wpAdminUrl: "",
          wpUsername: "",
          wpPassword: "",
          hostingProvider: "",
          cpanelUrl: "",
          cpanelUsername: "",
          ftpCredentials: "",
          issues: "",
          hasBackup: false,
          hasStaging: false,
          clientEmail: "",
          clientName: "",
        });
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 p-6"
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div
            className="p-10 text-white text-center"
            style={{
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Lock size={32} />
              <h1 className="text-3xl font-bold">WordPress Access Request</h1>
            </div>
            <p className="text-blue-100">
              To begin your WordPress maintenance project, I'll need access to
              your website. Please provide the following credentials securely.
            </p>
          </div>

          {/* Success/Error Message */}
          {submitStatus === "success" && (
            <div className="mx-10 mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle size={20} />
                <strong>Success!</strong>
              </div>
              <p className="text-green-600 text-sm mt-1">
                Your credentials file has been downloaded! Please send this file
                to me via email at idprojectworkmail@gmail.com
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mx-10 mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle size={20} />
                <strong>Error</strong>
              </div>
              <p className="text-red-600 text-sm mt-1">
                Please fill in all required fields (*) or contact me directly at
                idprojectworkmail@gmail.com
              </p>
            </div>
          )}

          {/* Form Content */}
          <div className="p-10">
            {/* Intro */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8">
              <h3 className="font-bold text-blue-900 mb-2">
                👋 Hi PT Overcrank Media Production,
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Thank you for choosing IdProject for your WordPress maintenance!
                To get started with your project, I need access to your
                WordPress admin panel. This form will help you provide the
                necessary credentials securely.
              </p>
            </div>

            {/* Client Info */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
                Client Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="clientEmail"
                    value={formData.clientEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
            </div>

            {/* WordPress Admin Access */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200 flex items-center gap-2">
                <Lock size={20} className="text-purple-600" />
                1. WordPress Admin Access
              </h2>

              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-2 text-sm">
                  WordPress Admin URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="wpAdminUrl"
                  value={formData.wpAdminUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  placeholder="https://yourwebsite.com/wp-admin"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Usually: yourwebsite.com/wp-admin or
                  yourwebsite.com/wp-login.php
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    Admin Username <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="wpUsername"
                    value={formData.wpUsername}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="admin_username"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    Admin Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="wpPassword"
                    value={formData.wpPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="••••••••••••"
                  />
                </div>
              </div>

              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  💡 <strong>Tip:</strong> You can create a new admin account
                  specifically for this project instead of sharing your main
                  admin credentials.
                </p>
              </div>
            </div>

            {/* Hosting Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200 flex items-center gap-2">
                <Server size={20} className="text-purple-600" />
                2. Hosting Information (Optional)
              </h2>

              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-2 text-sm">
                  Hosting Provider
                </label>
                <input
                  type="text"
                  name="hostingProvider"
                  value={formData.hostingProvider}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  placeholder="e.g., Hostinger, Niagahoster, DomaiNesia"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Your web hosting company name
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    cPanel/Control Panel URL
                  </label>
                  <input
                    type="url"
                    name="cpanelUrl"
                    value={formData.cpanelUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="https://cpanel.yourhost.com"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    cPanel Username
                  </label>
                  <input
                    type="text"
                    name="cpanelUsername"
                    value={formData.cpanelUsername}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="cpanel_user"
                  />
                </div>
              </div>

              <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  ⚠️ Only provide hosting access if major server-level changes
                  are needed. For most maintenance tasks, WordPress admin access
                  is sufficient.
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200 flex items-center gap-2">
                <Database size={20} className="text-purple-600" />
                3. Additional Information
              </h2>

              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-2 text-sm">
                  FTP/SFTP Credentials (If Available)
                </label>
                <textarea
                  name="ftpCredentials"
                  value={formData.ftpCredentials}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  placeholder="Host: ftp.yoursite.com&#10;Username: ftp_user&#10;Password: ••••••••&#10;Port: 21"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Only needed for advanced file management or if WordPress admin
                  is inaccessible
                </p>
              </div>

              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-2 text-sm">
                  Current Issues or Specific Requirements
                </label>
                <textarea
                  name="issues"
                  value={formData.issues}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  placeholder="Describe what needs to be fixed or updated..."
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="backup"
                    name="hasBackup"
                    checked={formData.hasBackup}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1 cursor-pointer"
                  />
                  <label
                    htmlFor="backup"
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    I have a recent backup of my website (or please create one
                    before making changes)
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="staging"
                    name="hasStaging"
                    checked={formData.hasStaging}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1 cursor-pointer"
                  />
                  <label
                    htmlFor="staging"
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    I have a staging/development site where changes can be
                    tested first
                  </label>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                <Shield size={20} />
                Security & Privacy Commitment
              </h3>
              <ul className="space-y-2 text-sm text-yellow-900">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    Credentials will be saved as a text file on your computer
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    Send the downloaded file to me via encrypted email
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Delete the file after sending for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    I will never share your credentials with third parties
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>You can change passwords after project completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>
                    A full backup will be created before any changes are made
                  </span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating File...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Lock size={20} />
                  Download Credentials File
                </span>
              )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Clicking this button will download a text file with your
              credentials. Send this file to idprojectworkmail@gmail.com
            </p>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-8 text-center border-t border-gray-200">
            <p className="font-bold text-gray-800 mb-2">
              Questions or concerns about sharing access?
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Feel free to reach out if you need help creating a temporary admin
              account or have any security questions.
            </p>
            <div className="pt-4 border-t border-gray-300">
              <p className="font-bold text-gray-800">IdProject</p>
              <p className="text-gray-600 text-sm">
                Email: idprojectworkmail@gmail.com
              </p>
              <p className="text-gray-600 text-sm">Phone: +62 81338452753</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;

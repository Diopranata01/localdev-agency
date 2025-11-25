import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Parse service account credentials from environment variable
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Prepare data row
    const data = req.body;
    const row = [
      data.timestamp,
      data.clientName,
      data.clientEmail,
      data.projectName,
      data.wpAdminUrl,
      data.wpUsername,
      data.wpPassword,
      data.hostingProvider || '-',
      data.cpanelUrl || '-',
      data.cpanelUsername || '-',
      data.ftpCredentials || '-',
      data.issues || '-',
      data.hasBackup ? 'Yes' : 'No',
      data.hasStaging ? 'Yes' : 'No'
    ];

    // Append to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:N', // Adjust sheet name if needed
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Credentials saved successfully' 
    });

  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to save credentials',
      error: error.message 
    });
  }
}
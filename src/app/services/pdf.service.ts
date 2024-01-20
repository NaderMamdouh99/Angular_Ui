import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  generatePdf() {
    const pdf = new jsPDF.default(); // Use jsPDF.default here
    pdf.text('Hello, this is a sample PDF!', 10, 10);
    // Add more content or customize as needed

    // Save the PDF with a specific name
    pdf.save('sample.pdf');
  }
}

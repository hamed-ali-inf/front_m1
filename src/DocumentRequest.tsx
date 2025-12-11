import React, { useState } from 'react';
import './DocumentRequest.css';

const DocumentRequest = () => {
  // استخدمنا <string> لتحديد أن هذه الحالة ستخزن نصاً فقط
  const [documentType, setDocumentType] = useState<string>('');
  const [requestReason, setRequestReason] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('تم إرسال طلبك بنجاح!');
    console.log('نوع المستند:', documentType);
    console.log('سبب الطلب:', requestReason);
  };

  return (
    <div className="document-request-container">
      <h1>Demandes de documents</h1>
      <form className="document-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="documentType">Type de document</label>
          <select
            id="documentType"
            value={documentType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDocumentType(e.target.value)}
            required
          >
            <option value="">اختر نوع المستند</option>
            <option value="transcript">كشف الدرجات</option>
            <option value="certificate">شهادة</option>
            <option value="recommendation">خطاب توصية</option>
            <option value="other">أخرى</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="requestReason">Motif de la demande</label>
          <textarea
            id="requestReason"
            value={requestReason}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setRequestReason(e.target.value)}
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Envoyer la demande</button>
      </form>
    </div>
  );
};

export default DocumentRequest;
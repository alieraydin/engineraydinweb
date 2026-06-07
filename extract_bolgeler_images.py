import fitz  # PyMuPDF
import os

pdf_path = r"C:\Users\alier\Desktop\Yeni klasör (6)\Diğer Sorular\Türkiye'de Bölgeler..pdf"
out_dir = r"public\bolgeler_images"

os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Toplam sayfa: {len(doc)}")

img_count = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    print(f"Sayfa {page_num+1}: {len(images)} görsel")
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        img_bytes = base_image["image"]
        img_ext = base_image["ext"]
        img_count += 1
        filename = f"bolgeler_pdf_image_{img_count}.{img_ext}"
        filepath = os.path.join(out_dir, filename)
        with open(filepath, "wb") as f:
            f.write(img_bytes)
        print(f"  Kaydedildi: {filename} ({len(img_bytes)} bytes)")

doc.close()
print(f"\nToplam {img_count} görsel çıkarıldı.")

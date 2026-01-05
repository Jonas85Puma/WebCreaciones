# 📧 Instrucciones para configurar Web3Forms

## 🔑 Cómo obtener tu Access Key

### Paso 1: Registrarte en Web3Forms
1. Ve a: **https://web3forms.com/**
2. Haz clic en el botón **"Get Started"** o **"Create Access Key"**

### Paso 2: Crear tu Access Key
1. **Email**: `webcreaciones.dev@gmail.com`
2. **Website URL**: `https://web-creaciones.vercel.app/`
3. Haz clic en **"Create Access Key"**

### Paso 3: Recibe tu Access Key
- Te llegará un email a `webcreaciones.dev@gmail.com`
- El email contendrá tu **Access Key** único
- Guárdalo en un lugar seguro

---

## 🛠️ Cómo configurar el Access Key en tu página

### Una vez tengas tu Access Key:

1. Abre el archivo: `index.html`
2. Busca la línea **611** que dice:
   ```html
   <input type="hidden" name="access_key" value="TU_ACCESS_KEY_AQUI">
   ```
3. Reemplaza `TU_ACCESS_KEY_AQUI` con tu Access Key real
4. Debería quedar así:
   ```html
   <input type="hidden" name="access_key" value="tu-key-real-aqui-1234567890">
   ```
5. Guarda el archivo
6. Haz push a GitHub/Vercel

---

## ✅ Características ya configuradas

Tu formulario ya tiene configurado:

✓ **Acción del formulario**: `https://api.web3forms.com/submit`
✓ **Método**: `POST`
✓ **Email de destino**: Se configurará con tu Access Key
✓ **Redirección**: A `/gracias.html` después de enviar
✓ **Asunto del email**: "Nuevo contacto desde WebCreaciones"
✓ **Protección anti-spam**: Honeypot incluido
✓ **Campos del formulario**:
  - Nombre (requerido)
  - Email (requerido)
  - Teléfono (opcional)
  - Servicio (requerido)
  - Mensaje (requerido)

---

## 📝 ¿Qué recibirás en tu email?

Cuando alguien envíe el formulario, recibirás un email con:
- **Asunto**: Nuevo contacto desde WebCreaciones
- **Nombre** del contacto
- **Email** del contacto
- **Teléfono** (si lo proporcionó)
- **Servicio** que le interesa
- **Mensaje** completo

---

## 🧪 Cómo probar que funciona

1. Despliega los cambios en Vercel
2. Ve a tu página: https://web-creaciones.vercel.app/
3. Llena el formulario con tus datos de prueba
4. Envía el formulario
5. Deberías ser redirigido a `/gracias.html`
6. Revisa tu email en `webcreaciones.dev@gmail.com`

---

## 🆘 Solución de problemas

### No me llega el Access Key
- Revisa tu carpeta de spam
- Verifica que escribiste bien el email
- Intenta nuevamente en: https://web3forms.com/

### El formulario no envía
- Verifica que el Access Key esté correctamente pegado
- Asegúrate de que los cambios estén en Vercel
- Revisa la consola del navegador (F12) para errores

### Los emails no llegan
- Verifica que el Access Key esté activo en Web3Forms
- Revisa tu carpeta de spam
- Confirma que el email en Web3Forms sea el correcto

---

## 📱 Contacto alternativo

Si tienes problemas, los usuarios también pueden contactarte por:
- **WhatsApp**: https://wa.me/960407014
- **Email directo**: webcreaciones.dev@gmail.com

---

## 🎯 URL de tu sitio web

Tu sitio está desplegado en:
**https://web-creaciones.vercel.app/**

Esta es la URL que debes usar para:
- Registro en Web3Forms
- Compartir en redes sociales
- Dar a tus clientes
- Poner en tarjetas de presentación

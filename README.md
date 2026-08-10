# Заняття 14 - Meta

- SEO
- Мета-теги
  - metadata
  - generateMetadata
- OG і Twitter мета-теги
- Шрифти
- Зображення з next/image
  - src - URL або шлях до картинки
  - alt - Альтернативний текст
  - width - Ширина зображення
  - height - Висота зображення
  - fill - Заповнити батьківський контейнер
  - sizes - Якого приблизно розміру картинка буде на різних екранах
  - quality - Якість оптимізованого зображення
  - priority - Старий спосіб пріоритезувати завантаження
  - preload - Попередньо завантажити важливе зображення
  - loading - lazy
  - placeholder - Placeholder під час завантаження
  - blurDataURL - Картинка для blur-placeholder
  - unoptimized - Вимкнути оптимізацію Next.js
  - loader - Власна функція генерації URL
  - onLoad - Викликається після завантаження
  - onError - Викликається при помилці
  - style / className - CSS

```js
<Image
  // Джерело

  src="photo.jpg"

  // Accessibility / SEO

  alt="Beautiful mountain landscape"

  // Розміри

  width={600}

  height={400}

  // Заповнити контейнер

  fill

  // Responsive sizes

  sizes="(max-width: 768px) 100vw, 600px"

  // Якість

  quality={85}

  // Пріоритет завантаження (старий API)

  priority

  // Новіший спосіб preload

  preload

  // Спосіб завантаження

  loading="lazy"

  // Placeholder

  placeholder="blur"

  // Зображення, яке показується під час blur

  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."

  // Вимкнути Next.js Image Optimization

  unoptimized={false}

  // Власний генератор URL

  loader={imageLoader}

  // Події

  onLoad={(event) => {
    console.log("Image loaded", event.currentTarget);
  }}

  onError={(event) => {
    console.error("Image failed", event.currentTarget);
  }}

  // CSS

  className="rounded-xl object-cover"

  style={{
    objectPosition: "center",
  }}
/>
```

- Lighthouse

<!-- https://cdn.pixabay.com/photo/2025/08/21/09/51/rouen-cathedral-9787080_1280.jpg -->

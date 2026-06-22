---
name: tensorflow
description: Framework open source de machine learning para construir, entrenar y desplegar modelos de IA a escala. Úsala cuando el usuario mencione o pregunte sobre ia, machine-learning, deep-learning, tensorflow.
---

# TensorFlow

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.
- Es una herramienta open source — verifica la licencia antes de uso comercial.

## Key Information
- **Category:** ia
- **Pricing:** open-source
- **License:** Apache 2.0
- **Technical Level:** avanzado
- **Compatibility:** Windows, macOS, Linux, Web
- **Official Site:** https://www.tensorflow.org
- **GitHub:** https://github.com/tensorflow/tensorflow

## Features
- API Keras para construcción rápida de modelos
- Ejecución eager para debugging interactivo
- TensorBoard para visualización de entrenamiento
- TF Lite para modelos en dispositivos móviles
- TF.js para machine learning en el navegador
- TPU support para aceleración hardware
- Distribución automática en múltiples GPUs

## Steps
### 1. Instala TensorFlow en tu entorno Python
Ejecuta `pip install tensorflow` para la versión estándar con soporte CPU/GPU. Para hardware específico, consulta la guía de compatibilidad. Se recomienda usar entornos virtuales o Conda para evitar conflictos de dependencias.

### 2. Define y compila tu modelo con Keras
Usa la API `tf.keras.Sequential` para modelos lineales o la API funcional para arquitecturas complejas. Define capas (`Dense`, `Conv2D`, `LSTM`), función de pérdida (`loss`), optimizador (`adam`) y métricas. Llama a `model.compile()` para preparar el entrenamiento.

### 3. Entrena el modelo con tus datos
Prepara tus datos como arrays NumPy o `tf.data.Dataset`. Llama a `model.fit(x_train, y_train, epochs=N, validation_split=0.2)` para iniciar el entrenamiento. Usa callbacks como `EarlyStopping` y `ModelCheckpoint` para evitar sobreajuste y guardar el mejor modelo.

### 4. Evalúa y despliega el modelo entrenado
Evalúa con `model.evaluate(x_test, y_test)`. Guarda el modelo con `model.save('modelo.h5')` o en formato SavedModel. Para producción, convierte a TensorFlow Lite (móviles), TensorFlow.js (navegador) o despliega con TensorFlow Serving.

## When to Use
- **Proyectos de deep learning a escala de producción:** Cuando necesitas entrenar redes neuronales profundas con soporte para múltiples GPUs o TPUs. TensorFlow destaca en pipelines de producción con TF Serving, TF Lite y TF.js para servir modelos en cualquier plataforma.
- **Investigación y experimentación con ecosistema completo:** Ideal para equipos que necesitan TensorBoard para visualizar métricas, hiperparámetros y grafos de cómputo durante el entrenamiento. El ecosistema integrado reduce la fricción entre experimentación y despliegue.
- **Aplicaciones móviles y web con inferencia local:** Perfecto cuando necesitas ejecutar modelos de IA directamente en dispositivos móviles (TF Lite) o en el navegador (TF.js) sin depender de un servidor backend para la inferencia.

## Examples
### Clasificador de imágenes con CNN
```
import tensorflow as tf
from tensorflow import keras
model = keras.Sequential([
    keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(28,28,1)),
    keras.layers.MaxPooling2D((2,2)),
    keras.layers.Flatten(),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
model.fit(x_train, y_train, epochs=5, validation_split=0.2)
tput: "Entrenamiento completado con precisión ~98% en el conjunto de validación en MNIST después de 5 épocas."
```

### Guardar y cargar modelo para inferencia
```
model.save('mi_modelo.h5')                         # Guardar
modelo_cargado = keras.models.load_model('mi_modelo.h5')  # Cargar
prediccion = modelo_cargado.predict(x_nuevo_dato)  # Inferir
tput: "Modelo guardado en disco y recargado exitosamente, listo para servir predicciones sin reentrenar."
```

## Tips
- Usa `tf.data.Dataset` en lugar de cargar todos los datos en memoria. La API de pipelines permite preprocesamiento eficiente, mezcla y carga en lotes desde disco.
- Siempre normaliza tus datos de entrada (escala 0-1 o estandarización z-score). Las redes neuronales convergen más rápido y mejor con datos normalizados.
- Usa TensorBoard para monitorear el entrenamiento: `tensorboard --logdir=./logs`. Visualiza curvas de pérdida, precisión, histogramas de pesos y el grafo del modelo en tiempo real.
- Aplica `EarlyStopping(patience=3)` y `ReduceLROnPlateau` como callbacks durante el entrenamiento para evitar sobreajuste y ajustar dinámicamente la tasa de aprendizaje.
- Para depuración, usa `tf.config.run_functions_eagerly(True)` que ejecuta las operaciones en modo eager y facilita el uso de breakpoints y print statements.

## FAQ
- **¿TensorFlow o PyTorch? ¿Cuál debo elegir?** TensorFlow brilla en producción y despliegue multiplataforma (móvil, web, servidor) con TF Serving, TF Lite y TF.js. PyTorch es preferido en investigación por su sintaxis más pitónica y depuración más intuitiva. Ambos son excelentes; elige según tu caso de uso.
- **¿Necesito una GPU para usar TensorFlow?** No es obligatorio. Puedes entrenar modelos pequeños en CPU, pero para redes profundas o datasets grandes una GPU NVIDIA con CUDA acelera el entrenamiento entre 10x y 50x. Google Colab ofrece GPUs gratuitas para empezar.
- **¿Cómo convierto mi modelo para usarlo en una app móvil?** Usa TensorFlow Lite Converter: `converter = tf.lite.TFLiteConverter.from_keras_model(model); tflite_model = converter.convert()`. El modelo resultante (.tflite) está optimizado para ejecutarse en Android, iOS y dispositivos embedidos.
- **¿Qué diferencia hay entre TensorFlow 1.x y 2.x?** TensorFlow 2.x adoptó ejecución eager por defecto (similar a PyTorch), eliminó la necesidad de sesiones y placeholders, e integró Keras como API oficial de alto nivel. La migración simplificó enormemente la sintaxis y depuración.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://www.tensorflow.org
- **Source Code Issues:** Check the repository at https://github.com/tensorflow/tensorflow for known issues.
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.

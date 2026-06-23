---
name: PyTorch
description: Framework de deep learning open source con computación dinámica, ideal para investigación y producción.
category: ia
tags: [machine-learning, deep-learning, python, redes-neuronales, ia, investigacion]
officialSite: https://pytorch.org
pricing: gratis
openSource: true
license: BSD
technicalLevel: avanzado
compatibility: [Windows, macOS, Linux]
featured: false
screenshots:
  - /screenshots/pytorch.webp
features:
  - Tensores con aceleración GPU nativa (CUDA)
  - Autograd con diferenciación automática
  - TorchScript para exportación a producción
  - TorchServe para despliegue de modelos
  - Distribuido con DDP y FSDP
  - Ecosistema torchvision, torchaudio, torchtext
  - PyTorch Lightning para training escalable
alternatives: [tensorflow]
relatedTools: [tensorflow, docker]
howToUse:
  - step: 1
    title: "Instala PyTorch y configura el entorno"
    description: "Visita pytorch.org, selecciona tu sistema operativo, gestor de paquetes y versión CUDA (o CPU). Ejecuta el comando de instalación. Verifica con torch.cuda.is_available() que la GPU está configurada correctamente."
  - step: 2
    title: "Define la arquitectura del modelo"
    description: "Crea una clase que herede de nn.Module, define las capas en __init__ (Linear, Conv2d, LSTM) y el forward pass en el método forward. PyTorch construye el grafo de cómputo dinámicamente en cada forward."
  - step: 3
    title: "Entrena el modelo con ciclo de training"
    description: "Define el DataLoader con tus datos, el optimizador (Adam, SGD) y la función de pérdida (CrossEntropyLoss, MSELoss). Itera sobre épocas y batches: forward, loss, optimizer.zero_grad(), loss.backward(), optimizer.step()."
  - step: 4
    title: "Evalúa y exporta el modelo"
    description: "Evalúa con model.eval() y torch.no_grad() para desactivar dropout y no calcular gradientes. Guarda el modelo con torch.save(model.state_dict(), 'modelo.pth') o expórtalo a TorchScript para producción."
whenToUse:
  - title: "Investigación y prototipado de redes neuronales"
    description: "Cuando necesitas experimentar con arquitecturas novedosas, modificar el grafo de cómputo dinámicamente durante la ejecución, o implementar papers académicos recientes."
  - title: "Aplicaciones de visión por computadora"
    description: "Para clasificación de imágenes, detección de objetos, segmentación semántica, generación de imágenes con GANs o difusión, usando torchvision y modelos pre-entrenados."
  - title: "Modelos de lenguaje y NLP"
    description: "Cuando trabajas con transformers, fine-tuning de LLMs, embeddings, o modelos seq2seq usando el ecosistema de Hugging Face que está construido sobre PyTorch."
examples:
  - title: "Red neuronal simple para clasificación"
    code: |
      import torch
      import torch.nn as nn
      
      class SimpleNN(nn.Module):
          def __init__(self):
              super().__init__()
              self.layers = nn.Sequential(
                  nn.Linear(784, 128),
                  nn.ReLU(),
                  nn.Linear(128, 10)
              )
          def forward(self, x):
              return self.layers(x)
      
      model = SimpleNN()
      x = torch.randn(1, 784)
      output = model(x)
      print(output.shape)
    output: "torch.Size([1, 10])"
  - title: "Ciclo de entrenamiento mínimo"
    code: |
      optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
      loss_fn = nn.CrossEntropyLoss()
      
      for epoch in range(5):
          for batch_x, batch_y in train_loader:
              optimizer.zero_grad()
              pred = model(batch_x)
              loss = loss_fn(pred, batch_y)
              loss.backward()
              optimizer.step()
          print(f"Epoch {epoch+1}, Loss: {loss.item():.4f}")
    output: "Epoch 1, Loss: 2.3012\nEpoch 2, Loss: 1.8734\n..."
tips:
  - text: "Siempre usa model.train() antes de entrenar y model.eval() antes de evaluar; esto controla capas como dropout y batch normalization que se comportan diferente en cada modo."
  - text: "Usa torch.cuda.amp para entrenamiento con precisión mixta automática y acelera el entrenamiento hasta 2x en GPUs modernas sin pérdida de calidad."
  - text: "Guarda checkpoints periódicamente con torch.save({ epoch, model_state, optimizer_state }, 'checkpoint.pth') para reanudar entrenamiento si se interrumpe."
  - text: "Usa DataLoader con num_workers > 0 para cargar datos en paralelo y evitar que la carga de datos sea el cuello de botella del entrenamiento."
  - text: "Para debugging, usa torch.autograd.set_detect_anomaly(True) que detecta operaciones que producen NaN o gradientes anómalos."
faq:
  - question: "¿Cuál es la diferencia entre PyTorch y TensorFlow?"
    answer: "PyTorch usa un grafo de cómputo dinámico (define-by-run) que facilita la depuración y experimentación, mientras TensorFlow tradicionalmente usaba grafo estático (define-and-run). PyTorch domina la investigación académica; TensorFlow tiene más herramientas de producción como TF Serving y TFLite."
  - question: "¿Cómo muevo tensores entre CPU y GPU?"
    answer: "Usa .to(device) o .cuda()/.cpu(). Define device = torch.device('cuda' if torch.cuda.is_available() else 'cpu') y pasa todos los tensores y el modelo a ese device para mantener consistencia."
  - question: "¿Qué es el autograd de PyTorch?"
    answer: "Es el sistema de diferenciación automática que calcula gradientes de forma automática. Cada operación sobre tensores con requires_grad=True construye el grafo, y al llamar .backward() sobre la pérdida, calcula gradientes para todos los parámetros."
  - question: "¿Cómo despliego un modelo PyTorch en producción?"
    answer: "Tienes varias opciones: exporta a TorchScript con torch.jit.script() o torch.jit.trace(), usa TorchServe para servir modelos via API REST, convierte a ONNX para interoperabilidad con otros runtimes, o usa PyTorch Lightning para estandarizar el pipeline de entrenamiento y despliegue."
publishedAt: 2026-06-01
---

## ¿Qué es?

PyTorch es un framework de deep learning desarrollado por Meta (Facebook) que combina flexibilidad investigativa con rendimiento de producción. Su grafo de computación dinámico (define-by-run) permite depurar y modificar modelos en tiempo real, convirtiéndolo en el favorito de la comunidad académica.

## ¿Para qué sirve?

PyTorch sirve para construir y entrenar redes neuronales para visión por computadora, procesamiento de lenguaje natural, sistemas de recomendación, modelos generativos, aprendizaje por refuerzo y cualquier tarea de deep learning.

## Cuándo usarla

- Para investigación académica que requiere flexibilidad y experimentación.
- Cuando necesitas depurar el flujo de gradientes paso a paso.
- Si trabajas con modelos transformer o arquitecturas custom.
- Para prototipado rápido de nuevas arquitecturas de red.
- Cuando valoras la integración con Python y su ecosistema científico.

## Cuándo NO usarla

- Si prefieres un framework con API más opinionada como Keras/TensorFlow.
- Para despliegue en dispositivos móviles o embebidos (TFLite es mejor).
- Cuando tu equipo está especializado en TensorFlow Serving.
- Si necesitas compatibilidad con hardware muy específico.

## Pros

- Grafo dinámico que facilita la depuración y experimentación.
- Comunidad académica dominante en publicaciones e investigación.
- Integración perfecta con Python y NumPy.
- PyTorch Lightning abstrae el boilerplate de training.
- Excelente para prototipado rápido de investigaciones.

## Contras

- Curva de aprendizaje alta para principiantes en ML.
- Documentación a veces dispersa entre versiones.
- Menos herramientas de producción que TensorFlow Serving.
- Ecosistema de modelos pre-entrenados más pequeño.
- Consumo de memoria puede ser alto comparado con TF.

import type React from 'react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import emailjs from 'emailjs-com'
import { Github, Linkedin, Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

export function FormContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID
    const userID = import.meta.env.VITE_USER_ID

    emailjs
      .send(
        serviceID,
        templateID,
        formData as unknown as Record<string, unknown>,
        userID
      )
      .then(response => {
        console.log('email enviado com sucesso', response.status, response.text)
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      })
      .catch(err => {
        console.error('Erro ao enviar email:', err)
        alert('Erro ao enviar o email, tente novamente.')
      })
  }

  return (
    <div className="text-center " id="contact">
      <h2 className="mb-6 text-3xl font-bold">Entre em contato</h2>
      <p className="mb-6 text-xl text-zinc-300">
        Vamos trabalhar juntos no seu próximo projeto!
      </p>
      <form className="w-full mx-auto space-y-3" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <Input
            placeholder="Digite seu nome"
            name="name"
            value={formData.name}
            type="text"
            onChange={handleOnchange}
            className="capitalize h-14"
          />
          <Input
            placeholder="Digite seu email"
            name="email"
            value={formData.email}
            type="email"
            onChange={handleOnchange}
            className="capitalize h-14"
          />
        </div>

        <Textarea
          placeholder="Digite a mensagem"
          className="capitalize"
          value={formData.message}
          onChange={handleOnchange}
          name="message"
          rows={10}
          cols={50}
        />

        <Button
          type="submit"
          className="w-full text-lg h-14 text-secondary-foreground bg-zinc-800 hover:bg-zinc-600"
        >
          <Send className="w-4 h-4 mr-2" /> Enviar mensagem
        </Button>
      </form>
      <div className="flex justify-center mt-6 space-x-4">
        <a
          href="https://www.linkedin.com/in/luiz-vinícius-38182b162/"
          target="blank"
        >
          <Button variant="outline" className="bg-zinc-800 hover:bg-zinc-700">
            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
          </Button>
        </a>

        <a href="https://github.com/viniciusbr32" target="blank">
          <Button variant="outline" className="bg-zinc-800 hover:bg-zinc-700">
            <Github className="w-4 h-4 mr-2" /> GitHub
          </Button>
        </a>
      </div>
    </div>
  )
}

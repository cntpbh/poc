'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const projectSchema = z.object({
  title: z.string().min(5, 'Título deve ter pelo menos 5 caracteres'),
  description: z.string().min(50, 'Descrição deve ter pelo menos 50 caracteres'),
  problem: z.string().min(50, 'Descreva o problema detalhadamente'),
  solution: z.string().min(50, 'Descreva a solução detalhadamente'),
  sector: z.string(),
  impact: z.string().min(30, 'Descreva o impacto esperado'),
  budget: z.string().transform(Number),
  trl: z.string().transform(Number),
})

type ProjectFormData = z.infer<typeof projectSchema>

export default function NovoProjetoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  })

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/projetos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Erro ao criar projeto')

      toast({
        title: 'Projeto criado com sucesso!',
        description: 'Você será redirecionado para o dashboard.',
      })

      router.push('/dashboard/startup')
    } catch (error) {
      toast({
        title: 'Erro ao criar projeto',
        description: 'Tente novamente mais tarde.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const sectors = [
    { value: 'educacao', label: 'Educação' },
    { value: 'saude', label: 'Saúde' },
    { value: 'seguranca', label: 'Segurança' },
    { value: 'meio-ambiente', label: 'Meio Ambiente' },
    { value: 'infraestrutura', label: 'Infraestrutura' },
    { value: 'gestao', label: 'Gestão Pública' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-6">
        <Card>
          <CardHeader>
            <CardTitle>Submeter Novo Projeto</CardTitle>
            <CardDescription>
              Preencha as informações do seu projeto para análise
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="title">Título do Projeto</Label>
                <Input
                  id="title"
                  {...register('title')}
                  placeholder="Ex: Sistema de Gestão Energética Inteligente"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  {...register('description')}
                  placeholder="Descreva seu projeto de forma clara e objetiva"
                  rows={4}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="problem">Problema Identificado</Label>
                <Textarea
                  id="problem"
                  {...register('problem')}
                  placeholder="Qual problema do setor público seu projeto resolve?"
                  rows={3}
                />
                {errors.problem && (
                  <p className="mt-1 text-sm text-red-600">{errors.problem.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="solution">Solução Proposta</Label>
                <Textarea
                  id="solution"
                  {...register('solution')}
                  placeholder="Como sua solução resolve o problema?"
                  rows={3}
                />
                {errors.solution && (
                  <p className="mt-1 text-sm text-red-600">{errors.solution.message}</p>
                )}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="sector">Setor</Label>
                  <Select onValueChange={(value) => setValue('sector', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o setor" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sector) => (
                        <SelectItem key={sector.value} value={sector.value}>
                          {sector.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.sector && (
                    <p className="mt-1 text-sm text-red-600">{errors.sector.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="trl">Nível TRL</Label>
                  <Select onValueChange={(value) => setValue('trl', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o TRL" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                        <SelectItem key={level} value={level.toString()}>
                          TRL {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.trl && (
                    <p className="mt-1 text-sm text-red-600">{errors.trl.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="impact">Impacto Esperado</Label>
                <Textarea
                  id="impact"
                  {...register('impact')}
                  placeholder="Qual o impacto social e econômico esperado?"
                  rows={2}
                />
                {errors.impact && (
                  <p className="mt-1 text-sm text-red-600">{errors.impact.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="budget">Orçamento Estimado (R$)</Label>
                <Input
                  id="budget"
                  type="number"
                  {...register('budget')}
                  placeholder="500000"
                />
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                )}
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Submeter Projeto'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

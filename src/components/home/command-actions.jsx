import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

import { SignOut, GearSix } from '@phosphor-icons/react'

import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import useAuth from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function CommandActions() {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()
  const { logout } = useAuth()

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'm' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const onLogOut = () => {
    logout()
    navigate('/login')
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Digite um comando ou pesquise..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Configurações">
          <CommandItem className="aria-selected:bg-background !p-0 !m-0">
            <Button
              variant={'ghost'}
              className="w-full justify-start cursor-default px-2 py-1.5 text-sm font-normal"
              onClick={onLogOut}
            >
              <SignOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </Button>
          </CommandItem>

          <CommandItem className="aria-selected:bg-background !p-0 !m-0">
            <Button
              variant={'ghost'}
              className="w-full justify-start cursor-default px-2 py-1.5 text-sm font-normal"
            >
              <GearSix className="mr-2 h-4 w-4" />
              <span>Configurações</span>
            </Button>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
